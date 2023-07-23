import { useContext, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { SnacksContext } from '../Context/snacks';
import { AllVendingMachineContext } from '../Context/all_vending_machines';

function EditSnack({ setShowModal, inventory, vendingMachine }) {
  // all available snacks, taken from context
  const { snacks } = useContext(SnacksContext)

  // function used to update state for all vending machines and user vending machines
  const { modifyState } = useContext(AllVendingMachineContext)

  // new potential inventory to be sent in request
  const [newInventory, setNewInventory] = useState(inventory ? {
      quantity: inventory.quantity,
      vending_machine_id: vendingMachine.id,
      snack_id: parseInt(inventory.snack.id)
    } : {
      quantity: 0,
      vending_machine_id: vendingMachine.id,
      snack_id: 0
    })

  // the dropdown options list is build from the snacks array, retrieved from snack context
  const dropDownOptions = snacks.map(snack =>
    <option key={snack.id} name='snack_id' value={snack.id}>
      {snack.name}: ${snack.price.toFixed(2)}</option>)

  // close the modal when clicking outside the modal.
  const modalRef = useRef()
  const closeModal = e => e.target === modalRef.current ? setShowModal(false) : null

  function createInventory() {
    fetch('/inventories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newInventory)
    }).then(rspns => {
      if (rspns.ok) {
        rspns.json().then(newInventory => {
          modifyState(getter => getter.map(machine => {
            if (machine.id === vendingMachine.id) {
              const newVendingMachine = {...machine}
              newVendingMachine.inventories = [...machine.inventories, newInventory]
              return newVendingMachine
            } return machine
          }))
        })
      }
      else rspns.json().then(rspns => alert(rspns.errors.snack_id))
    })
  }

  function updateInventory() {
    fetch(`/inventories/${inventory.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newInventory)    
    }).then(rspns => {
      if (rspns.ok) { // update state 
        rspns.json().then(updatedInventory => {
          modifyState(getter => getter.map(machine => {
            if (machine.id === vendingMachine.id) {
              machine.inventories = machine.inventories.map(inventory => 
                inventory.id === updatedInventory.id ? updatedInventory : inventory)
              return machine
            } 
            return machine
          }))
        })
      } else rspns.json().then(rspns => alert(rspns.errors.snack_id))
    })
  }

  function deleteInventory() {
    fetch(`/inventories/${inventory.id}`, {method: 'DELETE'})
      .then(rspns => {
        if (rspns.ok) { // update state 
          modifyState(getter => getter.map(machine => {
            if (machine.id === vendingMachine.id) {
              machine.inventories = machine.inventories
                .filter(i => i.id !== inventory.id)
              return machine
            } return machine
          }))
        } else alert("Something went wrong")
      })
  }
  
  function handleSnackSubmit(e) {
    e.preventDefault()
    if (inventory) {
      if (newInventory.snack_id) updateInventory()
      else deleteInventory()
    } else createInventory()
    setShowModal(false)
  }

  function handleFormChange(e){
    setNewInventory({
      ...newInventory,
      [e.target.name]: e.target.value === '0' ? 0 : parseInt(e.target.value) || ''
    })
  }
  
  // render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className='container' ref={modalRef} onClick={closeModal}>
      <form className='modal' onSubmit={handleSnackSubmit}>
        <h4>
          {inventory ?
            `Edit ${inventory.snack.name} in ${vendingMachine.name}` :
            `Add a new snack to ${vendingMachine.name}`}
        </h4>
        <select
          name='snack_id'
          value={newInventory.snack_id}
          onChange={handleFormChange}>
            <option key='0' name='snack_id' value='0'>
              {inventory ? 'remove snack' : 'none'}
            </option>
            {dropDownOptions}
        </select>
        <input
          type='number'
          name='quantity'
          value={newInventory.quantity}
          placeholder='quantity'
          required
          onChange={handleFormChange}/>
        <input type='submit'/>
      </form>
    </div>,
    document.getElementById('portal')
  );
}

export default EditSnack;

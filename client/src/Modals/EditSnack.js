import { useContext, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { SnacksContext } from '../Context/snacks';
import { AllVendingMachineContext } from '../Context/all_vending_machines';

function EditSnack({ setShowModal, oldInventory }) {
  // all available snacks, taken from context
  const { snacks } = useContext(SnacksContext)

  // function used to update state for all vending machines and user vending machines
  const { updateInventoryState } = useContext(AllVendingMachineContext)

  // newInventory is the potential inventory to be sent in a request
  const [newInventory, setNewInventory] = useState({
    id: oldInventory.id,
    quantity: oldInventory.quantity,
    snack_id: oldInventory.snack ? oldInventory.snack.id : 0,
    vending_machine_id: oldInventory.vending_machine.id
  })

  // the dropdown options list is build from the
  // snacks array, retrieved from snack context
  const dropDownOptions = snacks.map(snack =>
    <option key={snack.id} name='snack' value={snack.id}>
      {snack.name}: ${snack.price.toFixed(2)}</option>)

  // close the modal when clicking outside the modal.
  const modalRef = useRef()
  const closeModal = e => e.target === modalRef.current ? setShowModal(false) : null

  // update newInventory state on form change
  const handleFormChange = e => setNewInventory({
    ...newInventory,
    [e.target.name]: e.target.value})

  function handleFormSubmit(e) {
    e.preventDefault()
    if (oldInventory.snack) {
      if (newInventory.snack_id === '0') deleteInventory()
      else updateInventory()
    } else if (newInventory.snack_id) createInventory()
    setShowModal(false)
  }

  function createInventory() {
    fetch('/inventories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newInventory)
    }).then(rspns => {
      if (rspns.ok) rspns.json().then(updatedInventory => 
        updateInventoryState(updatedInventory, 'create'))
      else rspns.json().then(rspns => alert(rspns.errors.snack_id))
    })
  }

  function updateInventory() {
    fetch(`/inventories/${oldInventory.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newInventory)    
    }).then(rspns => {
      if (rspns.ok) rspns.json().then(updatedInventory => 
        updateInventoryState(updatedInventory, 'update'))
      else rspns.json().then(rspns => alert(rspns.errors.snack_id))
    })
  }

  function deleteInventory() {
    fetch(`/inventories/${oldInventory.id}`, {method: 'DELETE'})
      .then(rspns => {
        if (rspns.ok) { // update state 
          updateInventoryState(oldInventory, 'delete')
        } else alert("Something went wrong")
      })
  }
  
  // render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className='container' ref={modalRef} onClick={closeModal}>
      <form className='modal' onSubmit={handleFormSubmit}>
        <h4>
          {oldInventory.snack ?
            `Edit ${oldInventory.snack.name} in ${oldInventory.vending_machine.name}` :
            `Add a new snack to ${oldInventory.vending_machine.name}`}
        </h4>
        <select
          name='snack_id'
          value={newInventory.snack_id}
          onChange={handleFormChange}>
            <option key='0' name='snack_id' value={0}>
              {oldInventory.snack ? 'remove snack' : 'none'}
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

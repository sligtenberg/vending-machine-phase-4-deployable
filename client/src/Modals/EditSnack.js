import { useContext, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { SnacksContext } from '../Context/snacks';

function EditSnack({ setShowModal, inventory, vendingMachine }) {
  // all available snacks, taken from context
  const { snacks } = useContext(SnacksContext)

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

  function handleSnackSubmit(e) {
    e.preventDefault()
    if (inventory) {
      if (newInventory.snack_id) { // patch request to update the inventory
        fetch(`/inventories/${inventory.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newInventory)    
        }).then(rspns => {
          if (rspns.ok) {
            setShowModal(false)
            // update state 
          } else rspns.json().then(rspns => alert(rspns.errors.snack_id))
        })
      } else { // delete request to destroy the inventory
        fetch(`/inventories/${inventory.id}`, {method: 'DELETE'})
          .then(rspns => {
            if (rspns.ok) {
              setShowModal(false)
              // update state 
            } else alert("Something went wrong")
          })
      }
    } else { // post request creating a new inventory
      fetch('/inventories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInventory)
      }).then(rspns => {
        if (rspns.ok) {
          setShowModal(false)
          // update state
        }
        else rspns.json().then(rspns => alert(rspns.errors.snack_id))
      })
    }
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

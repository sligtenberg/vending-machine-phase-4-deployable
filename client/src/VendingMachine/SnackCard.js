import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { UserContext } from '../Context/user';
import EditSnack from '../Modals/EditSnack';
import { AllVendingMachineContext } from '../Context/all_vending_machines';

function SnackCard({ inventory, vendingMachine }) {
  const path = useLocation().pathname
  const [showModal, setShowModal] = useState(false)
  const { user } = useContext(UserContext)
  const { updateInventoryState } = useContext(AllVendingMachineContext)

  function handleSnackCardClick() {
    // if in manage vending machine mode, open snack-editing modal
    if (path === `/${user.username.toLowerCase()}`) setShowModal(true)
    // else if in shop mode and there is a snack there, purchase it
    else if (inventory.snack) {
      fetch(`/inventories/${inventory.id}/purchase`).then(rspns => {
        if (rspns.ok) {
          rspns.json().then(updatedInventory => updateInventoryState(updatedInventory, 'update'))
          alert(`${inventory.snack.name} has been purchased!`)
        }
        else rspns.json().then(rspns => alert(Object.values(rspns.errors)))
      })
    }
  }

  return (
    <>
      <button className='snack-card' onClick={handleSnackCardClick}>
        {inventory.snack ? 
          <div>
            {inventory.snack.name}<br/>
            ${inventory.snack.price.toFixed(2)}<br/>
            {inventory.quantity} left
          </div> : null}
      </button>
      {showModal ? <EditSnack
        setShowModal={setShowModal}
        oldInventory={inventory}
        vendingMachine={vendingMachine}/> : null}
    </>
  );
}

export default SnackCard;

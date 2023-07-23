import { useContext, useState } from "react";
import { useLocation } from 'react-router-dom'
import { UserContext } from "../Context/user";
import EditSnack from "../Modals/EditSnack";

function SnackCard({ inventory, vendingMachine }) {
  const path = useLocation().pathname
  const [showModal, setShowModal] = useState(false)
  const { user } = useContext(UserContext)

  function handleSnackCardClick() {
    // if in manage vending machine mode, open snack-editing modal
    if (path === `/${user.username.toLowerCase()}`) setShowModal(true)
    // else if in shop mode and there is a snack there, purchase it
    else if (inventory) console.log(`${inventory.snack.name} purchased`)
  }

  return (
    <>
      <button className="snack-card" onClick={handleSnackCardClick}>
        {inventory ? 
          <div>
            {inventory.snack.name}<br/>
            ${inventory.snack.price.toFixed(2)}<br/>
            {inventory.quantity} left
          </div> : null}
      </button>
      {showModal ? <EditSnack
        setShowModal={setShowModal}
        inventory={inventory}
        currentVendingMachine={vendingMachine}/> : null}
    </>
  );
}

export default SnackCard;

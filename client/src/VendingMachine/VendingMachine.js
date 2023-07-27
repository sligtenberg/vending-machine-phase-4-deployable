import { useContext } from "react";
import { useLocation } from 'react-router-dom'
import SnackContainer from "./SnackContainer";
import { AllVendingMachineContext } from "../Context/all_vending_machines";
import { UserContext } from "../Context/user";

function VendingMachine({ vendingMachine }) {
  const inventories = [...vendingMachine.inventories]
  const { modifyVendingMachineState } = useContext(AllVendingMachineContext)
  const path = useLocation().pathname
  const { user } = useContext(UserContext)
  //console.log(vendingMachine)

  // fill the remaining inventory slots with blank inventories
  while (inventories.length < 12) {
    inventories.push({
      id: `a${inventories.length}`,
      quantity: 0,
      vending_machine: vendingMachine,
      snack: null
    })
  }

  function handleDeleteButtonClick() {
    fetch(`/vending_machines/${vendingMachine.id}`, {method: 'DELETE'})
    .then(rspns => {
      if (rspns.ok) {
        modifyVendingMachineState(getter => getter.filter(oldVendingMachine => 
          oldVendingMachine.id !== vendingMachine.id)
        )
      } else alert("Something went wrong")
    })
  }

  return (
    <div className="vending-machine">
      {path === `/${user.username.toLowerCase()}` ?
        <button className='float-right' onClick={handleDeleteButtonClick}>X</button> : null}
      <h3>{vendingMachine.name}</h3>
      <SnackContainer inventories={inventories}/>
    </div>
  );
}

export default VendingMachine;

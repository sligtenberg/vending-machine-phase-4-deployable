import { useContext } from "react";
import SnackContainer from "./SnackContainer";
import { AllVendingMachineContext } from "../Context/all_vending_machines";

function VendingMachine({ vendingMachine }) {
  const inventories = [...vendingMachine.inventories]
  const { modifyVendingMachineState } = useContext(AllVendingMachineContext)

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
      <button className='float-right' onClick={handleDeleteButtonClick}>X</button>
      <h3>{vendingMachine.name}</h3>
      <SnackContainer inventories={inventories}/>
    </div>
  );
}

export default VendingMachine;

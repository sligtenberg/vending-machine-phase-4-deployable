import { useContext } from "react";
import { AllVendingMachineContext } from "../Context/all_vending_machines";
import VendingMachinesContainer from "../VendingMachine/VendingMachinesContainer";

function Shop() {
  const { allVendingMachines } = useContext(AllVendingMachineContext);

  return (
    <div>
      <div className="instructions">
        Below are all the vending machines, including you own!
        Click a snack to purchase it.
      </div>
      <VendingMachinesContainer vendingMachines={allVendingMachines}/>
    </div>
  );
}

export default Shop;

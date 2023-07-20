import { useContext } from "react";
import { AllVendingMachineContext } from "../Context/all_vending_machines";
import VendingMachinesContainer from "../VendingMachine/VendingMachinesContainer";

function Shop() {
  const { allVendingMachines } = useContext(AllVendingMachineContext);

  return (
    <div>
      <div className="dev-placeholder">* Instructions *</div>
      <VendingMachinesContainer vendingMachines={allVendingMachines}/>
    </div>
  );
}

export default Shop;

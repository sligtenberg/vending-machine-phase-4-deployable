import { useContext } from "react";
import { AllVendingMachineContext } from "../Context/all_vending_machines";
import VendingMachinesContainer from "../VendingMachine/VendingMachinesContainer";

function Shop() {
  const { allVendingMachines } = useContext(AllVendingMachineContext);

  return (
    <div>
      <div className="dev-placeholder">* Instructions *</div>
      <h3>Vending Machines Open For Business</h3>
      <VendingMachinesContainer vendingMachines={allVendingMachines}/>
    </div>
  );
}

export default Shop;

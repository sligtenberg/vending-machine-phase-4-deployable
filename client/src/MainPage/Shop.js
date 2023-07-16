import { useContext } from "react";
import { VendingMachineContext } from "../Context/vending_machine";

function Shop() {
  const { allVendingMachines } = useContext(VendingMachineContext);

  return (
    <div>
      <div className="dev-placeholder">* Instructions *</div>
      <h3>Vending Machines Open For Business</h3>
      <div className="dev-placeholder">* All Vending Machines *</div>
    </div>
  );
}

export default Shop;

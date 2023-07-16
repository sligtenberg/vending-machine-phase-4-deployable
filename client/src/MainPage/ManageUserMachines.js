import { useContext } from 'react';
import { VendingMachineContext } from '../Context/vending_machine';

function ManageUserMachines() {
  const { userVendingMachines } = useContext(VendingMachineContext)

  return (
    <div>
      <div className="dev-placeholder">* Instructions *</div>
      <h3>My Vending Machines</h3>
      <div className="dev-placeholder">* User Vending Machines *</div>
    </div>
  );
}

export default ManageUserMachines;

import { useContext } from 'react';
import { UserContext } from '../Context/user';
import VendingMachinesContainer from '../VendingMachine/VendingMachinesContainer';

function ManageUserMachines() {
  const { user } = useContext(UserContext)

  return (
    <div>
      <div className="dev-placeholder">* Instructions *</div>
      <h3>{user.username}'s Vending Machines</h3>
      <VendingMachinesContainer vendingMachines={user.vending_machines}/>
    </div>
  );
}

export default ManageUserMachines;

import { useContext } from 'react';
import { UserContext } from '../Context/user';
import VendingMachinesContainer from '../VendingMachine/VendingMachinesContainer';

function ManageUserMachines() {
  const { user } = useContext(UserContext)
  //console.log(user)

  return (
    <div>
      <div className="dev-placeholder">* Instructions *</div>
      <h2>{user.username}'s Vending Machines</h2>
      <VendingMachinesContainer vendingMachines={user.vending_machines}/>
    </div>
  );
}

export default ManageUserMachines;

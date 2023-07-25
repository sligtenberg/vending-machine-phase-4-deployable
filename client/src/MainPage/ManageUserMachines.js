import { useContext } from 'react';
import { UserContext } from '../Context/user';
import VendingMachinesContainer from '../VendingMachine/VendingMachinesContainer';
import NewVendingMachine from './NewVendingMachine';

function ManageUserMachines() {
  const { user } = useContext(UserContext)
  //console.log(user)

  return (
    <div>
      <div className="dev-placeholder">* Instructions *</div>
      <NewVendingMachine />
      <h2>{user.username}'s Vending Machines</h2>
      <VendingMachinesContainer vendingMachines={user.vending_machines}/>
    </div>
  );
}

export default ManageUserMachines;

import { useContext } from 'react';
import { UserContext } from '../Context/user';
import VendingMachinesContainer from '../VendingMachine/VendingMachinesContainer';
import NewVendingMachine from './NewVendingMachine';

function ManageUserMachines() {
  const { user } = useContext(UserContext)

  return (
    <div>
      <div className="instructions">
        Here you may create and edit your personal vending machines.
        Use the New Vending Machine form to create a new vending machine.
        The X in the top right deletes the vending machine.
        Click an empty snack slot to add a new snack to one of your vending machines.
        Click a snack to edit that particular snack in your vending machine.
      </div>
      <NewVendingMachine />
      <VendingMachinesContainer vendingMachines={user.vending_machines}/>
    </div>
  );
}

export default ManageUserMachines;

import { useContext } from 'react';
import { UserContext } from '../Context/user';

function ManageUserMachines() {
  const { user } = useContext(UserContext)

  return (
    <div>{user.username}'s Vending Machines</div>
  );
}

export default ManageUserMachines;

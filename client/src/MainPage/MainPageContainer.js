import { useContext, useEffect } from 'react';
import { UserContext } from '../Context/user';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Home from './Home';
import Shop from './Shop';
import ManageUserMachines from './ManageUserMachines';
import ManageSnacks from './ManageSnacks';
import { AllVendingMachineContext } from '../Context/all_vending_machines';
import { SnacksContext } from '../Context/snacks';

function MainPageContainer() {
  const { user } = useContext(UserContext)
  const { setAllVendingMachines } = useContext(AllVendingMachineContext)
  const { setSnacks } = useContext(SnacksContext)

  useEffect(() => {
    // fetch and set all vending machines
    fetch('/vending_machines').then(rspns => {
      if (rspns.ok) rspns.json().then(setAllVendingMachines)
      else alert("Something went wrong")
    })
    // fetch and set the snacks
    fetch('/snacks').then(rspns => {
      if (rspns.ok) rspns.json().then(setSnacks)
      else alert("Something went wrong")
    })
  }, [setAllVendingMachines, setSnacks])
  
  return (
    <div>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path={`/${user.username}`}>
          <ManageUserMachines />
        </Route>
        <Route path='/manage_snacks'>
          <ManageSnacks />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default MainPageContainer;

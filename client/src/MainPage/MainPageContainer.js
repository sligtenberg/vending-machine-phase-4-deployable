import { useContext, useEffect } from 'react';
import { UserContext } from '../Context/user';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Home from './Home';
import Shop from './Shop';
import ManageUserMachines from './ManageUserMachines';
import { AllVendingMachineContext } from '../Context/all_vending_machines';

function MainPageContainer() {
  const { user } = useContext(UserContext)
  const { setAllVendingMachines } = useContext(AllVendingMachineContext)

  // fetch and set all vending machines
  useEffect(() => {
    fetch('/vending_machines').then(rspns => {
      if (rspns.ok) rspns.json().then(setAllVendingMachines)
      else rspns.json().then(console.log)
    })
  }, [])
  
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

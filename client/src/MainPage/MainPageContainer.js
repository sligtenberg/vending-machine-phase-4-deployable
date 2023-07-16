import { useContext } from 'react';
import { UserContext } from '../Context/user';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Home from './Home';
import Shop from './Shop';
import ManageUserMachines from './ManageUserMachines';

function MainPageContainer() {
  const { user } = useContext(UserContext)
  
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

import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import { UserContext } from '../Context/user';

function MainPageContainer() {
  const { user } = useContext(UserContext)
  return (
    <div>
      <Switch>
        <Route path='/home'>
          <div>Home Page / Instructions</div>
        </Route>
        <Route path='/shop'>
          <div>All Vending Machines</div>
        </Route>
        <Route path={`/${user.username}`}>
          <div>{user.username}'s Vending Machines</div>
        </Route>
        <Route exact path='/'>
          <div>Home Page / Instructions</div>
        </Route>
        <Route path='*'>
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default MainPageContainer;

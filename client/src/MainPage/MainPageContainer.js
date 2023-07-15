import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';

function MainPageContainer() {
  return (
    <div>
      <Switch>
        <Route path='/home'>
          <div>Home Page / Instructions</div>
        </Route>
        <Route path='/shop'>
          <div>Shop</div>
        </Route>
        <Route path='/user-machines'>
          <div>User Machines</div>
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

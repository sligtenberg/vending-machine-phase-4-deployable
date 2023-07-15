import { Switch, Route } from "react-router-dom/cjs/react-router-dom";

function MainPageContainer() {
  return (
    <div>
      <Switch>
        <Route path="/testing">
          <div>Test Route</div>
        </Route>
        <Route path="/">
          <div>Vending Machines coming soon!</div>
        </Route>
      </Switch>
    </div>
  );
}

export default MainPageContainer;

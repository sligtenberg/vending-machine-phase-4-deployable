import { Switch, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./Context/user";
import './App.css';
import NavBarContainer from "./NavBar/NavBarContainer";

function App() {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    // auto login
    fetch('/me').then(rspns => {
      if (rspns.ok) rspns.json().then(setUser)
      else rspns.json().then(console.log)
    })
  }, [])

  return (
    <div className="App">
      <h1>Stevo's Vending Machines</h1>
      <NavBarContainer />
      <Switch>
        <Route path="/testing">
          <h1>Test Route</h1>
        </Route>
        <Route path="/">
          <h1>Vending machines coming soon!</h1>
          <div>Current User: {user}</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

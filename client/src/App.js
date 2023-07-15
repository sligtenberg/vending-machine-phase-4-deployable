import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Context/user";
import NavBarContainer from "./NavBar/NavBarContainer";
import MainPageContainer from "./MainPage/MainPageContainer";

function App() {
  const { user, setUser } = useContext(UserContext)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    // auto login
    fetch('/me').then(rspns => {
      if (rspns.ok) rspns.json().then(setUser)
      else rspns.json().then(setErrors)
    })
  }, [setUser])

  return (
    <div >
      <h1>Stevo's Vending Machines</h1>
      <NavBarContainer />
      {user ?
        <MainPageContainer /> :
        <h3>{errors.errors}</h3>}
    </div>
  );
}

export default App;

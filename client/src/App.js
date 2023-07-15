import { useContext, useEffect } from "react";
import { UserContext } from "./Context/user";
import NavBarContainer from "./NavBar/NavBarContainer";
import MainPageContainer from "./MainPage/MainPageContainer";

function App() {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    // auto login
    fetch('/me').then(rspns => {
      if (rspns.ok) rspns.json().then(setUser)
      // else rspns.json().then(console.log)
    })
  }, [setUser])

  return (
    <div >
      <h1>Stevo's Vending Machines</h1>
      <NavBarContainer />
      {user ?
        <MainPageContainer /> :
        <h3>Log in or sign up to vend!</h3>}
    </div>
  );
}

export default App;

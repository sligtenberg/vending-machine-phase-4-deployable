import { useContext, useEffect } from "react";
import { UserContext } from "./Context/user";
import NavBarContainer from "./NavBar/NavBarContainer";
import MainPageContainer from "./MainPage/MainPageContainer";
import { AllVendingMachineProvider } from "./Context/all_vending_machines";
import { SnacksProvider } from "./Context/snacks";

function App() {
  const { user, setUser } = useContext(UserContext)
  //console.log(user)

  useEffect(() => {
    // auto login - on page load, get request to '/me' looks for a user in the session
    // if found, the user is logged in and set to user in
    fetch('/me').then(rspns => {
      if (rspns.ok) rspns.json().then(userObj => {
        //console.log(userObj)
        setUser(userObj)
      })
      // else rspns.json().then(console.log)
    })
  }, [setUser])

  return (
    <div >
      <h1>Welcome to VendVille!</h1>
      <NavBarContainer />
      {user ?
        <AllVendingMachineProvider>
          <SnacksProvider>
            <MainPageContainer />
          </SnacksProvider>
        </AllVendingMachineProvider> :
        <h3>Log in or sign up to vend!</h3>}
    </div>
  );
}

export default App;

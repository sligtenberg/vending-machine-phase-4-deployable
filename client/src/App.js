import { useContext, useEffect } from "react";
import { UserContext } from "./Context/user";
import NavBarContainer from "./NavBar/NavBarContainer";
import MainPageContainer from "./MainPage/MainPageContainer";
import { AllVendingMachineProvider } from "./Context/all_vending_machines";

function App() {
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    // auto login - on page load, get request to '/me' looks for a user in the session
    // if found, the user is logged in and set to user in
    fetch('/me').then(rspns => {
      if (rspns.ok) rspns.json().then(setUser)
      // else rspns.json().then(console.log)
    })
  }, [setUser])

  return (
    <div >
      <h1>Welcome to VendVille!</h1>
      <NavBarContainer />
      {user ?
        <AllVendingMachineProvider>
          <MainPageContainer />
        </AllVendingMachineProvider> :
        <h3>Log in or sign up to vend!</h3>}
    </div>
  );
}

export default App;

import { useContext } from "react";
import { UserContext } from "../Context/user";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

function LoggedInNavBar() {
  const { user, setUser } = useContext(UserContext)

  // delete user's session 
  function handleLogout() {
    fetch('/logout', {method: 'DELETE'})
    .then(rspns => {
      if (rspns.ok) setUser(null)
      else alert("Something went wrong")
    })
  }

  return (
    <nav>
      <NavLink to='/home'>
        <button>
          Home
        </button>
      </NavLink>
      <NavLink to='/shop'>
        <button>
          Shop
        </button>
      </NavLink>
      <NavLink to={`/${user.username.toLowerCase()}`}>
        <button>
          My Vending Machines
        </button>
      </NavLink>
      <NavLink to='/'>
        <button onClick={handleLogout} >
          Log Out
        </button>
      </NavLink>
    </nav>
  );
}

export default LoggedInNavBar;
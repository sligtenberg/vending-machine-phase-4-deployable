import { useContext } from "react";
import { UserContext } from "../Context/user";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

function LoggedInNavBar() {
  const { setUser } = useContext(UserContext)

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
      <NavLink to='/user-machines'>
        <button>
          User Machines
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
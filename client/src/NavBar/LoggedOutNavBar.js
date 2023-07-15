import { useContext, useState } from "react";
import { UserContext } from "../Context/user";

function LoggedOutNavBar() {
  const [loginMode, setLoginMode] = useState(true)
  const { setUser } = useContext(UserContext)

  function handleSubmit(e) {
    e.preventDefault()
    fetch((loginMode ? '/login' : '/users'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value
      })
    })
    .then(rspns => {
      if(rspns.ok) rspns.json().then(setUser)
      else rspns.json().then(rspns => alert(rspns.errors))
    })    
  }

  return (
    <nav>
      Log In <input
        type='radio'
        name='loginModeToggle'
        defaultChecked
        onClick={() => setLoginMode(true)}/>
      Create Account <input
        type='radio'
        name='loginModeToggle'
        onClick={() => setLoginMode(false)}/>
      <form onSubmit={handleSubmit}>
        Username: <input type='text' />
        Password: <input type='password' />
        <input type='submit' value={loginMode ? 'Log In' : 'Create Account'}/>
      </form>
    </nav>
  );
}

export default LoggedOutNavBar;
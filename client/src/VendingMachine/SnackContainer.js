import { useContext } from "react";
import { useLocation } from 'react-router-dom'
import { UserContext } from "../Context/user";
import SnackCard from "./SnackCard";

function SnackContainer({ inventories }) {
  const path = useLocation().pathname
  const { user } = useContext(UserContext)

  const snackCards = inventories
    .map(inventory => <SnackCard key={inventory.id} inventory={inventory}/>)

  while (snackCards.length < 12) {
    snackCards.push(<div className="snack-card" key={`a${snackCards.length}`}>
      {path === `/${user.username.toLowerCase()}` ? "* add snack *" : null}
    </div>)
  }

  return (
    <div className="snack-container">{snackCards}</div>
  );
}

export default SnackContainer;

import SnackCard from "./SnackCard";

function SnackContainer({ inventories }) {
  const snackCards = inventories.map(inventory =>
    <SnackCard key={inventory.id} inventory={inventory}/>)

  return (
    <div className="snack-container">{snackCards}</div>
  );
}

export default SnackContainer;

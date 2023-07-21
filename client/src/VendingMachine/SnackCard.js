function SnackCard({ inventory }) {

  function handleSnackCardClick() {
    console.log("snack card clicked")
  }

function snackCard() {
  if (inventory) {
    return (
      <button >
        <div>{inventory.snack.name}</div>
        <div>${inventory.snack.price.toFixed(2)}</div>
        <div>{inventory.quantity} left</div>
      </button>
    )} else return <button className="snack-card"></button>
  }

  return (
    snackCard()
  );
}

export default SnackCard;

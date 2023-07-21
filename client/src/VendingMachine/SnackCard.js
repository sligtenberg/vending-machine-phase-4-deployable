function SnackCard({ inventory }) {

  // function handleSnackCardClick() {
  //   console.log("snack card clicked")
  // }

  // this function builds the snack card based on whether a snack (inventory) has been passed in or not.
  function snackCard() {
    if (inventory) {
      return (
        <button className="snack-card">
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

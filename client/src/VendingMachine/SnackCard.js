function SnackCard({ inventory }) {
  return (
    <div className="snack-card">
      <div>{inventory.snack.name}</div>
      <div>${inventory.snack.price.toFixed(2)}</div>
      <div>{inventory.quantity} left</div>
    </div>
  );
}

export default SnackCard;

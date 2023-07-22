import SnackCard from "./SnackCard";

function SnackContainer({ vendingMachine }) {

  // map the existing snacks (inventories) to snack card components
  const snackCards = vendingMachine.inventories
    .map(inventory => <SnackCard
      key={inventory.id}
      inventory={inventory}
      vendingMachine={vendingMachine}/>)

  // if there are not 12 snacks,
  // fill the rest of the slots with blank cards
  while (snackCards.length < 12) {
    snackCards.push(<SnackCard
      key={`a${snackCards.length}`}
      vendingMachine={vendingMachine}/>)
  }

  return (
    <div className="snack-container">{snackCards}</div>
  );
}

export default SnackContainer;

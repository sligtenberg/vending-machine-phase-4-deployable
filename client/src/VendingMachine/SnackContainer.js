import SnackCard from './SnackCard';

function SnackContainer({ inventories, vendingMachine }) {
  const snackCards = inventories.map(inventory =>
    <SnackCard key={inventory.id} inventory={inventory} vendingMachine={vendingMachine}/>)

  return (
    <div className='snack-container'>{snackCards}</div>
  );
}

export default SnackContainer;

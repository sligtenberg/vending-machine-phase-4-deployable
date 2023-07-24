import SnackContainer from "./SnackContainer";

function VendingMachine({ vendingMachine }) {
  const inventories = [...vendingMachine.inventories]

  // if there are not 12 inventories,
  // fill the remaining slots with blank inventories
  while (inventories.length < 12) {
    inventories.push({
      id: `a${inventories.length}`,
      quantity: 0,
      vending_machine: vendingMachine,
      snack: null
    })
  }

  return (
    <div className="vending-machine">
      <h3>{vendingMachine.name}</h3>
      <SnackContainer inventories={inventories}/>
    </div>
  );
}

export default VendingMachine;

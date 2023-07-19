import VendingMachine from "./VendingMachine";

function VendingMachinesContainer({ vendingMachines }) {

  const vendingMachineComponents = vendingMachines
    .map(vendingMachine => 
      <VendingMachine
        key={vendingMachine.id}
        vendingMachine={vendingMachine}/>)

  return (
    <div>{vendingMachineComponents}</div>
  );
}

export default VendingMachinesContainer;

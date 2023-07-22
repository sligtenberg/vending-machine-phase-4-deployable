import SnackContainer from "./SnackContainer";

function VendingMachine({ vendingMachine }) {

  return (
    <div className="vending-machine">
      <h3>{vendingMachine.name}</h3>
      <SnackContainer vendingMachine={vendingMachine}/>
    </div>
  );
}

export default VendingMachine;

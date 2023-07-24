import { createContext, useContext, useState } from "react";
import { UserContext } from "./user";

const AllVendingMachineContext  = createContext();

function AllVendingMachineProvider({ children }) {
  const [allVendingMachines, setAllVendingMachines] = useState([]);
  const { setUser } = useContext(UserContext)
  const { user } = useContext(UserContext)

  // callback function takes an array of vanding machines and applies the provided function to them 
  function modifyVendingMachineState(callback) {
    setAllVendingMachines(callback(allVendingMachines))
    setUser({...user, vending_machines: callback(user.vending_machines)})
  }

  // modifyInventoryState takes a callback function and uses it to update the state of a given vending machine
  // callback function takes a vending machine and returns an updated version of the vending machine
  function modifyInventoryState(vendingMachineId, callback) {
    modifyVendingMachineState(getter =>
      getter.map(vendingMachine =>
        vendingMachine.id === vendingMachineId ?
          callback(vendingMachine) : vendingMachine))}

  return (
    <AllVendingMachineContext.Provider
      value={{
        allVendingMachines,
        setAllVendingMachines,
        modifyVendingMachineState,
        modifyInventoryState}}>
          {children}
    </AllVendingMachineContext.Provider>
  );
}

export { AllVendingMachineContext, AllVendingMachineProvider };

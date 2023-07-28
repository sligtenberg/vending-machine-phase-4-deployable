import { createContext, useContext, useState } from "react";
import { UserContext } from "./user";

const AllVendingMachineContext  = createContext();

function AllVendingMachineProvider({ children }) {
  const [allVendingMachines, setAllVendingMachines] = useState([]);
  const { setUser } = useContext(UserContext)
  const { user } = useContext(UserContext)

  // modifyVendingMachine state takes a callback function
  // and applies it to the vendingMachines held in state.
  // the callback function must take an array of vending machines as a paramater
  // and apply changes to that array in place
  function modifyVendingMachineState(callback) {
    setAllVendingMachines(callback(allVendingMachines))
    setUser({...user, vending_machines: callback(user.vending_machines)})
  }

  // updateInventoryState takes an inventory and an action dynamically writes a callback function
  // which is sent to modifyVendingMachine state in order to update all vending machines to 
  // reflect the inventory modification in state
  function updateInventoryState(inventory, action) {
    modifyVendingMachineState(getter => getter.map(vendingMachine => {
      if (vendingMachine.id === inventory.vending_machine_id) {
        switch(action) {
          case 'create':
            return {...vendingMachine, inventories: [...[...vendingMachine.inventories], inventory]}
          case 'update':
            return {...vendingMachine, inventories: [...vendingMachine.inventories].map(oldInventory => oldInventory.id === inventory.id ? inventory : oldInventory)}
          default: // delete
            return {...vendingMachine, inventories: [...vendingMachine.inventories].filter(oldInventory => oldInventory.id !== inventory.id)}
        }
      } else return vendingMachine
    }))
  }

  return (
    <AllVendingMachineContext.Provider
      value={{
        allVendingMachines,
        setAllVendingMachines,
        modifyVendingMachineState,
        updateInventoryState}}>
          {children}
    </AllVendingMachineContext.Provider>
  );
}

export { AllVendingMachineContext, AllVendingMachineProvider };

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

  // updateInventoryState takes an inventory and an action and returns an array of
  // vending machines with the given action applied to the given inventory
  function updateInventoryState(inventory, action) {
    modifyVendingMachineState(getter => getter.map(vendingMachine => {
      if (vendingMachine.id === inventory.vending_machine.id) {
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

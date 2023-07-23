import { createContext, useContext, useState } from "react";
import { UserContext } from "./user";

const AllVendingMachineContext  = createContext();

function AllVendingMachineProvider({ children }) {
  const [allVendingMachines, setAllVendingMachines] = useState([]);
  const { setUser } = useContext(UserContext)
  const { user } = useContext(UserContext)

  function modifyState(callback) {
    setAllVendingMachines(callback(allVendingMachines))
    setUser({...user, vending_machines: callback(user.vending_machines)})
    //setUser(callback(user.vending_machines))
  }

  return (
    <AllVendingMachineContext.Provider
      value={{ allVendingMachines, setAllVendingMachines, modifyState }}>
        {children}
    </AllVendingMachineContext.Provider>
  );
}

export { AllVendingMachineContext, AllVendingMachineProvider };

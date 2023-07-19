import { createContext, useState } from "react";

const AllVendingMachineContext  = createContext();

function AllVendingMachineProvider({ children }) {
  const [allVendingMachines, setAllVendingMachines] = useState([]);

  return (
    <AllVendingMachineContext.Provider value={{ allVendingMachines, setAllVendingMachines }}>
      {children}
    </AllVendingMachineContext.Provider>
  );
}

export { AllVendingMachineContext, AllVendingMachineProvider };

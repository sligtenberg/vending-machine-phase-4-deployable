import { createContext, useState } from "react";

const SnacksContext = createContext();

function SnacksProvider({ children }) {
  const [snacks, setSnacks] = useState([]);

  return (
    <SnacksContext.Provider value={{ snacks, setSnacks }}>
      {children}
    </SnacksContext.Provider>
  );
}

export { SnacksContext, SnacksProvider }

import { createContext, useContext, useState } from "react";

const SideMenuContext = createContext();

function SideMenuStateProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <SideMenuContext.Provider value={{ toggle, setToggle }}>
      {children}
    </SideMenuContext.Provider>
  );
}

const useSideMenuState = () => useContext(SideMenuContext);

export { useSideMenuState, SideMenuStateProvider };

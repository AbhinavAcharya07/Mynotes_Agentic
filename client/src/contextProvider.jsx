import { createContext, useState } from "react";
export const ModeSwitcher = createContext();
export const ModeProvoider = (props) => {
  const [color, setColor] = useState("white");
  return (
    <ModeSwitcher.Provider value={{ color, setColor }}>
      {props.children}
    </ModeSwitcher.Provider>
  );
};

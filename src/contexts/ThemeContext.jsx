import { useState, useEffect, createContext } from "react";

export const ThemesContext = createContext();

export const ThemesProvider = (props) => {

  const [theme, setTheme] = useState(
    "linear-gradient(to right, #e55d87, #5fc3e4)"
  );

  return (
    <ThemesContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemesContext.Provider>
  );
};

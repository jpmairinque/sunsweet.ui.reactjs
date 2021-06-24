import { useState, useEffect, createContext } from "react";

export const ThemesContext = createContext();

export const ThemesProvider = (props) => {

   // Declaring default themeData

  const initialThemeData = {
    background: "linear-gradient(to right, #e55d87, #5fc3e4)",
    fontsize: "16px",
  };

  // Validating if localStorage exists

  if (!localStorage.getItem("themeData")) {
    localStorage.setItem("themeData", JSON.stringify(initialThemeData));
  }

  // Setting themeData based on localStorage data

  const [themeData, setThemeData] = useState(
    JSON.parse(localStorage.getItem("themeData"))
  );

  // Updating localStorage everytime themeData changes

  useEffect(() => {
    localStorage.setItem("themeData", JSON.stringify(themeData));
  }, [themeData]);

  return (

    <ThemesContext.Provider value={[themeData, setThemeData]}>
      {props.children}
    </ThemesContext.Provider>

  );
};

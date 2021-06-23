import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  // Declaring default user data

  const initialUserData = {
    name: "Karla Vaz",
    username: "thekarlavaz",
    email: "karlavaz@mail.com",
    birth: "08/05/1997",
  };

  // Validating if the localStorage exists

  if (!localStorage.getItem("userData")) {
    localStorage.setItem("userData", JSON.stringify(initialUserData));
  }

  // Setting userData based on localStorage data

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  // Updating localStorage everytime userData changes

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserContext.Provider>
  );
};

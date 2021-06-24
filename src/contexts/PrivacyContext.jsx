import { useState, useEffect, createContext } from "react";

export const PrivacyContext = createContext();

export const PrivacyProvider = (props) => {

  // Declaring default user data

  const initialPrivacyData = {
    visibility: "Public",
    data: "Always",
    sharing: "Anyone",
  };

  // Validating if localStorage exists

  if (!localStorage.getItem("privacyData")) {
    localStorage.setItem("privacyData", JSON.stringify(initialPrivacyData));
  }

  // Setting privacyData based on localStorage data

  const [privacyInfo, setPrivacyInfo] = useState(
    JSON.parse(localStorage.getItem("privacyData"))
  );

  // Updating localStorage everytime privacyInfo changes

  useEffect(() => {
    localStorage.setItem("privacyData", JSON.stringify(privacyInfo));
  }, [privacyInfo]);

  return (

    <PrivacyContext.Provider value={[privacyInfo, setPrivacyInfo]}>
      {props.children}
    </PrivacyContext.Provider>
    
  );
};

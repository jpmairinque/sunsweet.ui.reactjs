import { useState, createContext } from "react";

export const UserContext = createContext()

export const UserProvider = (props) => {

    const [userData, setUserData] = useState({
        name: "Karla Vaz",
        username: "thekarlavaz",
        email: "karlavaz@mail.com",
        birth: "08/05/1997",
      })

      return(

        <UserContext.Provider value={[userData, setUserData]}>

        {props.children}

        </UserContext.Provider>



      )






}


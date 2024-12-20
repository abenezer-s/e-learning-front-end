import React, { useState } from "react";

export const UserContext = React.createContext();

export const UserContextProvider = ({children}) => {
    const [user, setUserCreator] = useState({
      isCreator:null,
      loggedIn:null,
    });
    const updateType = (creator)=>{
        setUserCreator(
          prevState => ({
            ...prevState,
            isCreator: creator
          })
        );
    }
    const updateLogin = (status)=>{
      setUserCreator(
        prevState => ({
          ...prevState,
          loggedIn: status,
        })
      );
  }
    return (
      <UserContext.Provider value={{user, updateType, updateLogin}}>
        {children}
      </UserContext.Provider>
    );
}

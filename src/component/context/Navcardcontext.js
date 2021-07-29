import React, { createContext, useContext, useState } from "react";

export const GetNavcardContext = createContext();

const GetNavcardContextProvider = (props) => {
    const [cartnav, setcartnav] = useState(false);
  
  
  return (
    <GetNavcardContext.Provider value={{cartnav, setcartnav  }}>
      {props.children}
    </GetNavcardContext.Provider>
  );
};

export { GetNavcardContextProvider };
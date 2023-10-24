"use client"
import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const FavoritesProvider = ({children}) => {
  const [myCurrencies, setMyCurrencies] = useState([]);
  
  const addCurrencies = (data) => {
    setMyCurrencies([...myCurrencies,data])
  }
  
  return (
    <UserContext.Provider value={({ myCurrencies, addCurrencies })}>
      {children}
    </UserContext.Provider>
  );
};

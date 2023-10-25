'use client'

import { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) throw new Error('falta el provider')
  return context
}

export const GlobalContextProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const item = localStorage.getItem("favorites")
    if (item) {
      const localFavs = JSON.parse(item)
      if (localFavs.length > 0) {
        setFavorites(localFavs)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])


  const addFavorites = (crypto) => {
    if (!favorites.find((fav) => fav.serial_id === crypto.serial_id)) {
      setFavorites([...favorites, crypto])
    }
  }

  const deleteFavorites = (idCrypto) => {
    const filteredCryptos = favorites.filter(favorite => favorite.serial_id !== idCrypto);
    setFavorites(filteredCryptos)
  }
  return (
    <GlobalContext.Provider value={{ favorites, addFavorites, deleteFavorites }}>
      {children}
    </GlobalContext.Provider>
  )
}

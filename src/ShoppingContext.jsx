import React, { createContext, useState, useContext } from 'react';

export const ShoppingListContext = createContext(null);

export const Wrapper = ({ children }) => {
  const localList =
    JSON.parse(window.localStorage.getItem('ShoppingList')) ?? [];

  const [list, setList] = useState(localList);
  const [error, setError] = useState(null);
  return (
    <ShoppingListContext.Provider value={{ list, setList, error, setError }}>
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingContext = () => useContext(ShoppingListContext);

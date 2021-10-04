import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react";

import LocationsStore from "./LocationsStore";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const locationsStore = new LocationsStore();

  return (
    <StoreContext.Provider
      value={useLocalObservable(() => ({ locationsStore }))}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useLocation = () => {
  const { locationsStore } = useContext(StoreContext);
  return locationsStore;
};

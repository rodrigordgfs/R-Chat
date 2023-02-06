import { ReactNode, createContext, useEffect, useState } from "react";

interface SettingsContextType {
  isDrawerOpen: boolean;
  loading: boolean;
  toogleLoading: () => void;
  toogleDrawer: () => void;
}

interface SettingsContextProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as SettingsContextType);

export function SettingsContextProvider({ children }: SettingsContextProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function toogleDrawer() {
    setIsDrawerOpen((prevState) => !prevState);
  }

  function toogleLoading() {
    setLoading((prevState) => !prevState);
  }

  return (
    <SettingsContext.Provider
      value={{
        loading,
        toogleLoading,
        isDrawerOpen,
        toogleDrawer,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

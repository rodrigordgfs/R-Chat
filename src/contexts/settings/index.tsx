import { ReactNode, createContext, useState } from "react";

interface SettingsContextType {
  isDrawerOpen: boolean;
  toogleDrawer: () => void;
}

interface SettingsContextProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as SettingsContextType);

export function SettingsContextProvider({ children }: SettingsContextProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function toogleDrawer() {
    setIsDrawerOpen((prevState) => !prevState);
  }

  return (
    <SettingsContext.Provider
      value={{
        isDrawerOpen,
        toogleDrawer,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

import { ReactNode, createContext, useState } from "react";

interface SettingsContextType {
  isModalOpen: boolean;
  toogleModal: () => void;
}

interface SettingsContextProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as SettingsContextType);

export function SettingsContextProvider({ children }: SettingsContextProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toogleModal() {
    setIsModalOpen((prevState) => !prevState);
  }

  return (
    <SettingsContext.Provider
      value={{
        isModalOpen,
        toogleModal,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

import { User } from "firebase/auth";
import { ReactNode, createContext } from "react";

interface UserType {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
}

interface UserContextType {
  handleSetUser: (user: User) => void;
  handleGetUser: () => UserType;
  isLoggedIn: () => boolean;
}

interface UserContextProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProps) {
  function handleSetUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  function handleGetUser() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
    };
  }

  function isLoggedIn() {
    return !!JSON.parse(localStorage.getItem("user") || "{}")?.uid;
  }

  return (
    <UserContext.Provider
      value={{
        handleSetUser,
        handleGetUser,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

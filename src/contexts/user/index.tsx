import { ReactNode, createContext, useState, useContext } from "react";
import { supabase } from "../../libs/supabase";
import { useNavigate } from "react-router-dom";
import { SettingsContext } from "../settings";
import { errorMessage, infoMessage, successMessage } from "../../utils/toast";

interface UserType {
  id: string | undefined | null;
  username: string | undefined | null;
  email: string | undefined;
  displayName: string;
  photoURL: string;
  about: string;
}

interface UserContextType {
  user: UserType;
  isLoggedIn: () => boolean;
  handleRegister: (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => void;
  handleLogin: (email: string, password: string) => void;
  handleSignOut: () => void;
}

interface UserContextProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState({} as UserType);

  const { toogleLoading } = useContext(SettingsContext);

  const navigate = useNavigate();

  function isLoggedIn() {
    return !!user?.id;
  }

  async function checkIfDataExists(field: string, value: string) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq(field, value);
    if (error) {
      errorMessage(error.message);
      return;
    }
    if (data?.length === 0) {
      return false;
    }
    return true;
  }

  async function createUser(
    username: string,
    id: string | undefined | null,
    email: string | undefined
  ): Promise<boolean> {
    const { data, error } = await supabase.from("users").insert({
      id,
      username,
      email,
    });
    if (error) {
      toogleLoading();
      errorMessage(error.message);
      return false;
    }
    setUser({ id, email, username, about: "", displayName: "", photoURL: "" });
    toogleLoading();
    return true;
  }

  async function checkIfEmailUsernameExists(
    username: string,
    email: string
  ): Promise<boolean> {
    const usernameExists = await checkIfDataExists("username", username);
    if (usernameExists) {
      toogleLoading();
      infoMessage("Username already exists");
      return true;
    }
    const emailExists = await checkIfDataExists("email", email);
    if (emailExists) {
      toogleLoading();
      infoMessage("Email already exists");
      return true;
    }
    return false;
  }

  async function signUp(
    email: string,
    password: string
  ): Promise<string | null | undefined> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      toogleLoading();
      errorMessage(error.message);
      return null;
    }
    return data.user?.id;
  }

  async function handleRegister(
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    if (username === "") {
      infoMessage("Please enter your username");
    } else if (email === "") {
      infoMessage("Please enter your email");
    } else if (password === "") {
      infoMessage("Please enter your password");
    } else if (confirmPassword !== password) {
      infoMessage("Passwords do not match");
    } else {
      toogleLoading();
      if (await checkIfEmailUsernameExists(username, email)) {
        return;
      }
      const id = await signUp(email, password);
      if (await createUser(username, id, email)) {
        successMessage(
          "User created! Please, Confirm your email in your email inbox!"
        );
        setTimeout(() => {
          navigate("/login");
        }, 6000);
      }
    }
  }

  async function getUserData(id: string | undefined | null): Promise<Boolean> {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id);
    if (error) {
      toogleLoading();
      errorMessage(error.message);
      return false;
    }
    setUser({
      id: data?.[0].id,
      username: data?.[0].username,
      email: data?.[0].email,
      displayName: data?.[0].displayName,
      photoURL: data?.[0].photoURL,
      about: data?.[0].about,
    });
    toogleLoading();
    return true;
  }

  async function handleLogin(email: string, password: string) {
    if (email === "") {
      infoMessage("Please enter your email");
    } else if (password === "") {
      infoMessage("Please enter your password");
    } else {
      toogleLoading();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        errorMessage(error.message);
        toogleLoading();
        return;
      }
      if (await getUserData(data.user?.id)) {
        navigate("/");
      }
    }
  }

  function handleSignOut() {
    setUser({} as UserType);
    navigate("/login");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        handleLogin,
        handleRegister,
        handleSignOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

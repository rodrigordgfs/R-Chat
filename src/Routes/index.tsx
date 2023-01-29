import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { SettingsContextProvider } from "../contexts/settings";
import { UserContextProvider } from "../contexts/user";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UserContextProvider>
              <SettingsContextProvider>
                <Home />
              </SettingsContextProvider>
            </UserContextProvider>
          }
        />
        <Route
          path="/login"
          element={
            <UserContextProvider>
              <Login />
            </UserContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

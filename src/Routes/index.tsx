import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { SettingsContextProvider } from "../contexts/settings";
import { UserContextProvider } from "../contexts/user";
import { ChatsContextProvider } from "../contexts/chats";
import { Register } from "../screens/Register";
import { ForgotPassword } from "../screens/ForgotPassword";

export function Router() {
  return (
    <BrowserRouter>
      <SettingsContextProvider>
        <UserContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ChatsContextProvider>
                  <Home />
                </ChatsContextProvider>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </UserContextProvider>
      </SettingsContextProvider>
    </BrowserRouter>
  );
}

import { useContext, useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { UserContext } from "../../contexts/user";
import { ToastContainer, toast } from "react-toastify";
import { Envelope, Lock } from "phosphor-react";
import { Loading } from "../../components/Loading";

export function ForgotPassword() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }

  function handleForgotPassword(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <Loading>
      <main className="bg-zinc-900 w-screen h-screen flex justify-center">
        <div className="mx-0 my-auto flex flex-col items-center">
          <img src={Logo} className="h-20 w-20" />
          <h1 className="text-white text-4xl font-semibold mt-4">R Chat</h1>
          <p className="text-gray-400 mb-4">
            Recover your password and start using!
          </p>
          <form className="flex flex-col gap-2" onSubmit={handleForgotPassword}>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-gray-200">
                E-mail address
              </label>
              <div className="flex fle-row bg-zinc-800 px-4 py-2 rounded-lg shadow-lg gap-4">
                <Envelope size={24} className="text-gray-400" />
                <input
                  className="bg-transparent border-none outline-none text-white"
                  name="email"
                  placeholder="email@domain.com"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 transition-colors text-white rounded-md h-9 mt-2 font-semibold"
            >
              Recover Password
            </button>
            <span
              className="text-gray-400 hover:text-gray-500 transition-colors cursor-pointer text-center mt-4"
              onClick={handleLogin}
            >
              Sign in and start using now!
            </span>
          </form>
        </div>
        <ToastContainer />
      </main>
    </Loading>
  );
}

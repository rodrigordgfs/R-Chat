import { GoogleLogo } from "phosphor-react";
import Logo from "../../assets/logo.png";

export function Login() {
  return (
    <main className="bg-zinc-900 w-screen h-screen flex justify-center">
      <div className="mx-0 my-auto flex flex-col items-center">
        <img src={Logo} className="h-20 w-20" />
        <h1 className="text-white text-4xl font-semibold mt-4">R Chat</h1>
        <p className="text-gray-400 mb-4">Sign in and start using!</p>
        <button className="bg-blue-600 hover:bg-blue-700 transition-colors h-10 w-full rounded-full font-semibold text-white mt-4 flex flex-row items-center justify-center gap-4 px-10">
          <GoogleLogo size={24} /> Sign in with Google
        </button>
      </div>
    </main>
  );
}

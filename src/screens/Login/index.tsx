import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../../libs/firebase";

export function Login() {
  const navigate = useNavigate();

  function handleSignIn() {
    signInWithGoogle().then(() => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      console.log(user);
      if (user?.uid) {
        navigate("/");
      }
    });
  }

  return (
    <main className="bg-zinc-900 w-screen h-screen flex justify-center">
      <div className="mx-0 my-auto flex flex-col items-center">
        <img src={Logo} className="h-20 w-20" />
        <h1 className="text-white text-4xl font-semibold mt-4">R Chat</h1>
        <p className="text-gray-400 mb-4">Sign in and start using!</p>
        <button
          className="bg-blue-700 hover:bg-zinc-700 transition-colors h-10 w-full rounded-full font-semibold text-white mt-4 flex flex-row items-center justify-center gap-4 px-10"
          onClick={handleSignIn}
        >
          <FcGoogle size={24} className="drop-shadow-lg" /> Sign in with Google
        </button>
      </div>
    </main>
  );
}

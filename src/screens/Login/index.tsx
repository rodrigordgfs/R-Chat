import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { authFirebase, providerGoogleFirebase } from "../../libs/firebase";
import { UserContext } from "../../contexts/user";
import { UserCredential, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

export function Login() {
  const navigate = useNavigate();
  const { handleSetUser, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, []);

  function handleSignIn() {
    signInWithPopup(authFirebase, providerGoogleFirebase)
      .then(({ user }: UserCredential) => {
        handleSetUser(user);
        navigate("/");
      })
      .catch((error) =>
        toast.error(error, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
        })
      );
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
      <ToastContainer />
    </main>
  );
}

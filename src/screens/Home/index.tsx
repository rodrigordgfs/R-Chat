import { useEffect } from "react"
import { Chats } from "../../components/Chats"
import { Conversation } from "../../components/Conversation"
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (!user?.uid) {
        navigate("/login");
      }
  }, [])

  return (
    <main className="bg-zinc-300 w-screen h-screen flex justify-center">
      <div className="w-screen h-screen bg-white mx-0 my-auto flex flex-row shadow-md">
        <Chats />
        <Conversation />
      </div>
    </main>
  )
}
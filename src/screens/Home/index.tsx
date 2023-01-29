import { useContext, useEffect } from "react";
import { Chats } from "../../components/Chats";
import { useNavigate } from "react-router-dom";
import { ConversationHeader } from "../../components/ConversationHeader";
import { ConversationChat } from "../../components/ConversationChat";
import { ConversationInput } from "../../components/ConversationInput";
import { UserContext } from "../../contexts/user";

export function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }
  }, []);

  return (
    <main className="bg-zinc-300 w-screen h-screen flex justify-center">
      <div className="w-screen h-screen bg-white mx-0 my-auto flex flex-col shadow-md">
        <ConversationHeader />
        <ConversationChat />
        <ConversationInput />
      </div>
    </main>
  );
}

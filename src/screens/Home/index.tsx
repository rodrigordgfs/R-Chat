import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ConversationHeader } from "../../components/ConversationHeader";
import { ConversationChat } from "../../components/ConversationChat";
import { ConversationInput } from "../../components/ConversationInput";
import { UserContext } from "../../contexts/user";
import { ChatsContext } from "../../contexts/chats";
import { NoChatSelected } from "../../components/NoChatSelected";
import { ToastContainer } from "react-toastify";

export function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);
  const { activeChatID } = useContext(ChatsContext);

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }
  }, []);

  return (
    <main className="bg-zinc-300 w-screen h-screen flex justify-center">
      <div className="w-screen h-screen bg-white mx-0 my-auto flex flex-col shadow-md">
        <ConversationHeader />
        {activeChatID ? (
          <>
            <ConversationChat />
            <ConversationInput />
          </>
        ) : (
          <NoChatSelected />
        )}
      </div>
      <ToastContainer />
    </main>
  );
}

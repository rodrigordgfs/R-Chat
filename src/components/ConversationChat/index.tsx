import { useContext } from "react";
import { ConversatinTileReceived } from "../ConversatinTileReceived";
import { ConversationTileSent } from "../ConversationTileSent";
import { ChatsContext } from "../../contexts/chats";
import { UserContext } from "../../contexts/user";

export function ConversationChat() {
  const { currentChat } = useContext(ChatsContext);
  const { getUserData } = useContext(UserContext);

  return (
    <div className="flex-1 px-4 overflow-scroll bg-zinc-800 overflow-x-hidden scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-600">
      {currentChat?.messages.map((data) => {
        if (getUserData().id === data.userID) {
          return (
            <ConversationTileSent
              key={data.id}
              message={data.message}
              datetime={data.datetime}
            />
          );
        } else {
          return (
            <ConversatinTileReceived
              key={data.id}
              message={data.message}
              photoURL={currentChat.user.photoURL}
              datetime={data.datetime}
            />
          );
        }
      })}
    </div>
  );
}

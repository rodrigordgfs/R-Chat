import { ChatText } from "phosphor-react";
import { ChatTile } from "../ChatTile";
import { useContext } from "react";
import { ChatsContext } from "../../contexts/chats";
import { NewChat } from "../NewChat";

export function ChatList() {
  const { isChatListEmpty, chats } = useContext(ChatsContext);

  return (
    <div className="flex-1 overflow-scroll overflow-x-hidden scrollbar-none divide-y divide-solid divide-zinc-800">
      {isChatListEmpty ? (
        <div className="flex-1 flex flex-col gap-2 items-center justify-center mt-10">
          <p className="text-white w-48 text-center font-semibold">
            You don't have any start-up son! To start click on the icon below.
          </p>
          <NewChat />
        </div>
      ) : (
        <div>
          {chats.map(({ id, messages, user }) => (
            <ChatTile
              key={id}
              id={id}
              image={user.photoURL}
              name={user.name}
              lastMessage={messages[messages.length - 1]?.message}
              datetime={messages[messages.length - 1]?.datetime}
            />
          ))}
        </div>
      )}
    </div>
  );
}

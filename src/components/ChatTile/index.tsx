import { formatDistanceToNow } from "date-fns";
import { Avatar } from "../Avatar";
import { useContext } from "react";
import { ChatsContext } from "../../contexts/chats";
import { SettingsContext } from "../../contexts/settings";
import clsx from "clsx";

interface ChatTileProps {
  id: string;
  image: string;
  name: string;
  lastMessage: string;
  datetime: string;
}

export function ChatTile({
  id,
  image,
  name,
  lastMessage,
  datetime,
}: ChatTileProps) {
  const { handleSetAdctiveChatID, activeChatID } = useContext(ChatsContext);
  const { toogleDrawer } = useContext(SettingsContext);

  const dateDistance =
    datetime &&
    formatDistanceToNow(new Date(datetime), {
      addSuffix: true,
    });

  function handleClickTileMessage() {
    handleSetAdctiveChatID(id);
    toogleDrawer();
  }

  return (
    <div
      className="flex flex-row items-center gap-4 p-4 hover:bg-blue-700 transition-colors cursor-pointer"
      onClick={handleClickTileMessage}
    >
      <Avatar image={image} />
      <div className="flex-1 flex flex-col">
        <div className="flex flex-row items-center justify-between gap-2">
          <span className="text-white font-bold leading-tight">{name}</span>
          {datetime && (
            <span className="text-gray-400 text-sm">{dateDistance}</span>
          )}
        </div>
        {lastMessage && (
          <span className="text-sm text-gray-400">{lastMessage}</span>
        )}
      </div>
    </div>
  );
}

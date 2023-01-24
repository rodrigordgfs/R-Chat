import { formatDistanceToNow } from "date-fns";
import { Avatar } from "../Avatar";

interface ChatTileProps {
  image: string;
  name: string;
  lastMessage: string;
  datetime: string;
}

export function ChatTile({
  image,
  name,
  lastMessage,
  datetime,
}: ChatTileProps) {
  const dateDistance = formatDistanceToNow(new Date(datetime), {
    addSuffix: true,
  });
  return (
    <div className="flex flex-row items-center gap-4 p-4 hover:bg-zinc-800 transition-colors cursor-pointer">
      <Avatar image={image} />
      <div className="flex-1 flex flex-col">
        <div className="flex flex-row items-center justify-between gap-2">
          <span className="text-white font-bold leading-tight">{name}</span>
          <span className="text-white text-sm">{dateDistance}</span>
        </div>
        <span className="text-sm text-zinc-200">{lastMessage}</span>
      </div>
    </div>
  );
}

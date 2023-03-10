import { Avatar } from "../Avatar";
import { formatDistanceToNow } from "date-fns";

interface ConversatinTileReceivedProps {
  message: string;
  photoURL: string;
  datetime: string;
}

export function ConversatinTileReceived({
  message,
  photoURL,
  datetime,
}: ConversatinTileReceivedProps) {
  return (
    <div className="w-full flex flex-row items-start gap-4 py-2">
      <Avatar image={photoURL} />
      <div className="flex-1 flex flex-col max-w-xl gap-1">
        <span className="bg-zinc-600 text-white rounded-tl-lg rounded-tr-lg rounded-br-lg p-4 shadow-md">
          {message}
        </span>
        <span className="text-sm text-gray-500">
          {formatDistanceToNow(new Date(datetime), {
            addSuffix: true,
          })}
        </span>
      </div>
    </div>
  );
}

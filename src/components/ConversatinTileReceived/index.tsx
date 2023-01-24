import { Avatar } from "../Avatar";

interface ConversatinTileReceivedProps {
  message: string;
}

export function ConversatinTileReceived({
  message,
}: ConversatinTileReceivedProps) {
  return (
    <div className="w-full flex flex-row items-start gap-4 py-2">
      <Avatar image="https://randomuser.me/api/portraits/men/45.jpg" />
      <div className="flex-1 flex flex-col max-w-xl gap-1">
        <span className="bg-zinc-600 text-white rounded-tl-lg rounded-tr-lg rounded-br-lg p-4 shadow-md">
          {message}
        </span>
        <span className="text-sm text-gray-500">22 hours ago</span>
      </div>
    </div>
  );
}

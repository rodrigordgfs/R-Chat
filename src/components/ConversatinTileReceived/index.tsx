interface ConversatinTileReceivedProps {
  message: string;
}

export function ConversatinTileReceived({
  message,
}: ConversatinTileReceivedProps) {
  return (
    <div className="w-full flex flex-row items-start gap-4 py-2">
      <img
        src="https://randomuser.me/api/portraits/men/45.jpg"
        className="w-14 h-14 rounded-full shadow-sm border border-zinc-300"
      />
      <div className="flex-1 flex flex-col max-w-xl gap-1">
        <span className="bg-zinc-200 rounded-tl-lg rounded-tr-lg rounded-br-lg p-4 border border-zinc-300 shadow-sm">
          {message}
        </span>
        <span className="text-sm text-slate-500">22 hours ago</span>
      </div>
    </div>
  );
}

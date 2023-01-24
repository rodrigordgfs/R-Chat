interface ConversationTileSentProps {
  message: string;
}

export function ConversationTileSent({ message }: ConversationTileSentProps) {
  return (
    <div className="w-full flex flex-col items-end py-2">
      <div className="flex-1 flex flex-col max-w-xl gap-1 items-end">
        <span className="bg-blue-500 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg p-4 border border-zinc-600 shadow-sm">
          {message}
        </span>
        <span className="text-sm text-slate-500">22 hours ago</span>
      </div>
    </div>
  );
}

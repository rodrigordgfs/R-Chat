import { Smiley, PaperPlaneRight, Paperclip } from "phosphor-react";
import { FormEvent, useState } from "react";

export function ConversationInput() {
  const [message, setMessage] = useState<string>("");

  function handleSendMessage(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="w-full h-20 bg-zinc-900 flex flex-row items-center px-4 border-l border-zinc-800">
      <form
        className="flex-1 flex flex-row items-center gap-4"
        onSubmit={handleSendMessage}
      >
        <div className="flex flex-row items-center gap-2">
          <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 transition-colors cursor-pointer">
            <Smiley size={28} className="text-white" />
          </div>
          <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 transition-colors cursor-pointer">
            <Paperclip size={28} className="text-white" />
          </div>
        </div>
        <input
          className="flex-1 h-12 rounded-lg bg-zinc-800 p-4 text-white placeholder:text-white"
          placeholder="Write a message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value.trim())}
        />
        <button className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 transition-colors cursor-pointer">
          <PaperPlaneRight size={28} className="text-white" />
        </button>
      </form>
    </div>
  );
}

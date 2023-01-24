import { Smiley, PaperPlaneRight } from "phosphor-react";
import { FormEvent } from "react";

export function ConversationInput() {
  function handleSendMessage(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="w-full h-16 bg-zinc-900 flex flex-row items-center px-4">
      <form className="flex-1 flex flex-row items-center gap-4" onSubmit={handleSendMessage}>
        <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 transition-colors cursor-pointer">
          <Smiley size={28} className="text-white" />
        </div>
        <input className="flex-1 h-10 rounded-lg bg-zinc-800 p-4 text-white placeholder:text-white" placeholder="Type your message ..." />
        <button className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-800 transition-colors cursor-pointer">
          <PaperPlaneRight size={28} className="text-white" />
        </button>
      </form>
    </div>
  );
}

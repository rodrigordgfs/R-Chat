import { Smiley, PaperPlaneRight } from "phosphor-react";

export function ConversationInput() {
  return (
    <div className="w-full h-16 bg-zinc-100 flex flex-row items-center px-4">
      <form className="flex-1 flex flex-row items-center gap-4">
        <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-slate-200 transition-colors cursor-pointer">
          <Smiley size={28} />
        </div>
        <input className="flex-1 h-10 rounded-lg bg-zinc-200 p-4" />
        <button>
          <PaperPlaneRight size={28} />
        </button>
      </form>
    </div>
  );
}

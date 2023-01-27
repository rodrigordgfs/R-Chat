import { ChatText, Gear, ShareNetwork, SignOut, Sparkle } from "phosphor-react";
import { ChatsMenu } from "../ChatsMenu";
import { Profile } from "../Profile";
import { useNavigate } from "react-router-dom";

export function ChatsHeader() {
  return (
    <div className="h-16 flex flex-row items-center justify-between gap-5 px-4">
      <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
        <Profile />
      </div>
      <h1 className="text-white font-semibold text-xl hover:text-blue-600 transition-colors cursor-pointer">R Chat</h1>
      <div className="flex flex-row">
        <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
          <ChatText size={20} className="text-white" />
        </div>
        
      </div>
    </div>
  );
}

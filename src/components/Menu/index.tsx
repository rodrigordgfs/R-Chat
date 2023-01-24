import {
  ChatText,
  ShareNetwork,
  Gear,
  DotsThreeVertical,
} from "phosphor-react";

export function Menu() {
  return (
    <div className="h-16 flex flex-row items-center justify-evenly gap-5 px-4">
      <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
        <img src="https://randomuser.me/api/portraits/men/45.jpg" className="h-7 w-7 rounded-full" />
      </div>
      <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
        <ChatText size={20} className="text-white" />
      </div>
      <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
        <Gear size={20} className="text-white" />
      </div>
      <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
        <ShareNetwork size={20} className="text-white" />
      </div>
      <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
        <DotsThreeVertical size={20} className="text-white" />
      </div>
    </div>
  );
}

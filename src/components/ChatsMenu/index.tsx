import { DotsThreeVertical } from "phosphor-react";

export function ChatsMenu() {
    return (
        <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
          <DotsThreeVertical size={20} className="text-white" />
        </div>
    )
}
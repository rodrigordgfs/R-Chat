import { ChatText, Gear, ShareNetwork, SignOut } from "phosphor-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChatsMenu } from "../ChatsMenu";
import { Profile } from "../Profile";

export function ChatsHeader() {
  return (
    <div className="h-16 flex flex-row items-center justify-between gap-5 px-4">
      <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
        <Profile />
      </div>
      <div className="flex flex-row">
        <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
          <ChatText size={20} className="text-white" />
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <ChatsMenu />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="bg-zinc-600 rounded-lg shadow-lg"
              sideOffset={5}
            >
              <DropdownMenu.Arrow
                className="fill-current text-zinc-600"
                width={10}
                height={10}
              />
              <DropdownMenu.Item className="flex flex-row items-center px-6 py-2 gap-4 rounded-tl-lg rounded-tr-lg hover:bg-zinc-400 transition-colors cursor-pointer">
                <Gear size={20} className="text-white" />
                <p className="text-white">Settings</p>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="DropdownMenuSeparator" />

              <DropdownMenu.Item className="flex flex-row items-center px-6 py-2 gap-4 hover:bg-zinc-400 transition-colors cursor-pointer">
                <ShareNetwork size={20} className="text-white" />
                <p className="text-white">Share</p>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="DropdownMenuSeparator" />

              <DropdownMenu.Item className="flex flex-row items-center px-6 py-2 gap-4 rounded-bl-lg rounded-br-lg hover:bg-zinc-400 transition-colors cursor-pointer">
                <SignOut size={20} className="text-white" />
                <p className="text-white">Sign Out</p>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}

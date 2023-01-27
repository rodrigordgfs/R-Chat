import { DotsThreeVertical, Gear, List, SignOut, Sparkle } from "phosphor-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Drawer from "react-modern-drawer";
import { useState } from "react";
import 'react-modern-drawer/dist/index.css'
import { Chats } from "../Chats";
import { ChatsMenu } from "../ChatsMenu";
import { useNavigate } from "react-router-dom";

export function ConversationHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  
  function toggleDrawer() {
    setIsOpen((prevState) => !prevState);
  }

  function handleSignOut() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div className="w-full h-16 bg-zinc-900 border-l-2 border-zinc-800 flex flex-row items-center px-4 gap-4 shadow-lg">
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        overlayOpacity={0.8}
        size={350}
      >
        <Chats />
      </Drawer>
      <div className="flex flex-row items-center gap-4">
        <div
          className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
          onClick={toggleDrawer}
        >
          <List size={24} className="text-white" />
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <span className="text-white font-bold">John Doe</span>
        <span className="text-white text-xs">Active 1h ago</span>
      </div>
      <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
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
                <Sparkle size={20} className="text-white" />
                <p className="text-white">About</p>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="DropdownMenuSeparator" />

              <DropdownMenu.Item
                onClick={handleSignOut}
                className="flex flex-row items-center px-6 py-2 gap-4 rounded-bl-lg rounded-br-lg hover:bg-zinc-400 transition-colors cursor-pointer"
              >
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

import {
  DotsThreeVertical,
  Gear,
  List,
  SignOut,
  Sparkle,
} from "phosphor-react";
import { formatDistanceToNow } from "date-fns";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Drawer from "react-modern-drawer";
import { useContext, useState } from "react";
import "react-modern-drawer/dist/index.css";
import { Chats } from "../Chats";
import { useNavigate } from "react-router-dom";
import { SettingsContext } from "../../contexts/settings";
import { ChatsContext } from "../../contexts/chats";

export function ConversationHeader() {
  const navigate = useNavigate();

  const { isModalOpen, toogleModal } = useContext(SettingsContext);
  const { activeChatID, currentChat } = useContext(ChatsContext);

  function handleSignOut() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div className="w-full h-16 bg-zinc-900 border-l-2 border-zinc-800 flex flex-row items-center px-4 shadow-lg">
      <Drawer
        open={isModalOpen}
        onClose={toogleModal}
        direction="left"
        overlayOpacity={0.8}
        size={350}
      >
        <Chats />
      </Drawer>
      <div className="flex flex-row items-center gap-4">
        <div
          className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
          onClick={toogleModal}
        >
          <List size={24} className="text-white" />
        </div>
        {activeChatID && (
          <img
            src={currentChat?.user?.photoURL}
            className="w-10 h-10 rounded-full"
          />
        )}
      </div>
      <div className="flex-1 ml-4 flex flex-col">
        {activeChatID ? (
          <>
            <span className="text-white font-bold">
              {currentChat?.user?.name}
            </span>
            <span className="text-white text-xs">
              {currentChat?.messages?.length > 0 &&
                formatDistanceToNow(
                  new Date(
                    new Date(
                      currentChat.messages[
                        currentChat.messages.length - 1
                      ].datetime
                    )
                  ),
                  {
                    addSuffix: true,
                  }
                )}
            </span>
          </>
        ) : (
          <>
            <h1 className="text-white font-semibold text-xl hover:text-blue-600 transition-colors cursor-pointer">
              R Chat
            </h1>
          </>
        )}
      </div>
      <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <div className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
              <DotsThreeVertical size={20} className="text-white" />
            </div>
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

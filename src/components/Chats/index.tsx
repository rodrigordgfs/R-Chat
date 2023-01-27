import { ChatList } from "../ChatList";
import { ChatsHeader } from "../ChatsHeader";
import { ChatSearch } from "../ChatSearch";

export function Chats() {
    return (
        <div className="max-w-sm h-full w-full bg-zinc-900 hidden lg:flex flex-col">
            <ChatsHeader />
            <ChatSearch />
            <ChatList />
        </div>
    )
}
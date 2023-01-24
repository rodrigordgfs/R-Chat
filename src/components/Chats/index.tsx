import { ChatList } from "../ChatList";
import { Menu } from "../Menu";
import { SearchChat } from "../SearchChat";

export function Chats() {
    return (
        <div className="max-w-sm h-full w-full bg-zinc-900 flex flex-col">
            <Menu />
            <SearchChat />
            <ChatList />
        </div>
    )
}
import { ChatList } from "../ChatList";
import { Menu } from "../Menu";
import { SearchChat } from "../SearchChat";

export function Chats() {
    return (
        <div className="max-w-xs h-full w-full bg-blue-600 flex flex-col">
            <SearchChat />
            <ChatList />
            <Menu />
        </div>
    )
}
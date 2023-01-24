import { ConversationChat } from "../ConversationChat";
import { ConversationHeader } from "../ConversationHeader";
import { ConversationInput } from "../ConversationInput";

export function Conversation() {
  return (
    <div className="flex-1 flex flex-col">
      <ConversationHeader />
      <ConversationChat />
      <ConversationInput />
    </div>
  );
}

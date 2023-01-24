import { ConversatinTileReceived } from "../ConversatinTileReceived";
import { ConversationTileSent } from "../ConversationTileSent";

export function ConversationChat() {
  return (
    <div className="flex-1 px-4">
      <ConversatinTileReceived message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus vestibulum mattis ullamcorper." />
      <ConversationTileSent message="Pharetra et ultrices neque ornare. Posuere morbi leo urna molestie at elementum eu facilisis. Egestas congue quisque egestas diam in arcu cursus." />
    </div>
  );
}

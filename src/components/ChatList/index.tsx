import { ChatTile } from "../ChatTile";

const CHATS = [
  {
    image: "https://randomuser.me/api/portraits/men/84.jpg",
    name: "John Doe",
    lastMessage: "Hey, how's it going?",
    datetime: "2023-01-01 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "Anne Mark",
    lastMessage: "Hey, how's it going?",
    datetime: "2023-01-05 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    name: "Mike Smith",
    lastMessage: "Hey, how's it going?",
    datetime: "2023-01-12 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    name: "Ahseem O'Neil",
    lastMessage: "Hey, how's it going?",
    datetime: "2023-01-02 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/87.jpg",
    name: "Jake Johnson",
    lastMessage: "Hey, how's it going?",
    datetime: "2022-12-25 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    name: "Paul Newman",
    lastMessage: "Hey, how's it going?",
    datetime: "2022-12-29 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "John Doe",
    lastMessage: "Hey, how's it going?",
    datetime: "2022-01-08 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/84.jpg",
    name: "John Doe",
    lastMessage: "Hey, how's it going?",
    datetime: "2023-01-01 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "Anne Mark",
    lastMessage: "Hey, how's it going?",
    datetime: "2023-01-05 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    name: "Mike Smith",
    lastMessage: "Hey, how's it going?",
    datetime: "2023-01-12 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    name: "Ahseem O'Neil",
    lastMessage: "Hey, how's it going?",
    datetime: "2023-01-02 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/87.jpg",
    name: "Jake Johnson",
    lastMessage: "Hey, how's it going?",
    datetime: "2022-12-25 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    name: "Paul Newman",
    lastMessage: "Hey, how's it going?",
    datetime: "2022-12-29 12:00:00",
  },
  {
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "John Doe",
    lastMessage: "Hey, how's it going?",
    datetime: "2022-01-08 12:00:00",
  },
];

export function ChatList() {
  return (
    <div className="flex-1 overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-600 divide-y divide-solid divide-zinc-800">
      {CHATS.map(({ image, name, lastMessage, datetime }, index) => (
        <ChatTile
          key={index}
          image={image}
          name={name}
          lastMessage={lastMessage}
          datetime={datetime}
        />
      ))}
    </div>
  );
}

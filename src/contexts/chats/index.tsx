import { ReactNode, createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PERSON_NAMES } from "../../utils/names";

interface ChatsSettingsContextType {
  activeChatID: string;
  isChatListEmpty: boolean;
  currentChat: ChatProps;
  chats: ChatProps[];
  handleCreateNewChat: (email: string) => void;
  handleSetAdctiveChatID: (id: string) => void;
}

interface ChatsContextProps {
  children: ReactNode;
}

interface UserProps {
  id: string;
  name: string;
  photoURL: string;
  email: string;
}

interface MessageProps {
  id: string;
  userID: string;
  message: string;
  datetime: string;
}

interface ChatProps {
  id: string;
  user: UserProps;
  messages: MessageProps[];
}

export const ChatsContext = createContext({} as ChatsSettingsContextType);

export function ChatsContextProvider({ children }: ChatsContextProps) {
  const [chats, setChats] = useState([] as ChatProps[]);
  const [activeChatID, setActiveChatID] = useState("");
  const [currentChat, setCurrentChat] = useState({} as ChatProps);

  const isChatListEmpty = chats.length === 0;

  useEffect(() => {
    console.log("chats", chats);
    setCurrentChat(chats.find((chat) => chat.id === activeChatID) as ChatProps);
  }, [activeChatID]);

  function handleCreateNewChat(email: string) {
    const newChat = {
      id: uuidv4(),
      user: {
        id: uuidv4(),
        name: PERSON_NAMES[Math.floor(Math.random() * PERSON_NAMES.length)],
        photoURL: `https://randomuser.me/api/portraits/men/${
          Math.floor(Math.random() * 50) + 1
        }.jpg`,
        email: email,
      },
      messages: [] as MessageProps[],
    };
    setChats((prevChats) => [...prevChats, newChat]);
    setActiveChatID(newChat.id);
  }

  function handleSetAdctiveChatID(chatID: string) {
    setActiveChatID(chatID);
  }

  return (
    <ChatsContext.Provider
      value={{
        chats,
        activeChatID,
        isChatListEmpty,
        currentChat,
        handleCreateNewChat,
        handleSetAdctiveChatID,
      }}
    >
      {children}
    </ChatsContext.Provider>
  );
}

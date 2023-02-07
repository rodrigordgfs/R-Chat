import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { UserContext } from "../user";
import { v4 as uuidv4 } from "uuid";
import { PERSON_NAMES } from "../../utils/names";
import { MESSAGES } from "../../utils/messages";
import { toast } from "react-toastify";
import { supabase } from "../../libs/supabase";
import { errorMessage } from "../../utils/toast";
import { SettingsContext } from "../settings";

interface ChatsSettingsContextType {
  activeChatID: string;
  isChatListEmpty: boolean;
  currentChat: ChatProps;
  chats: ChatProps[];
  handleNewMessages: (message: string) => void;
  handleSetAdctiveChatID: (id: string) => void;
  handleCreateNewChat: (email: string) => Promise<Boolean | any>;
}

interface ChatsContextProps {
  children: ReactNode;
}

interface IUser {
  id: string | undefined | null;
  username: string | undefined | null;
  email: string | undefined;
  displayName: string;
  photoURL: string;
  about: string;
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

  const { getUserData } = useContext(UserContext);
  const { toogleLoading } = useContext(SettingsContext);

  useEffect(() => {
    setCurrentChat(chats.find((chat) => chat.id === activeChatID) as ChatProps);
  }, [activeChatID]);

  async function checkIfEmailExists(email: string): Promise<Boolean | any> {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);
    if (error) {
      errorMessage(error.message);
      return false;
    }
    if (data?.length === 0) {
      return false;
    } else {
      return data[0];
    }
  }

  async function handleCreateNewChat(email: string) {
    toogleLoading();
    const user = await checkIfEmailExists(email);
    console.log(user);
    if (!user) {
      toogleLoading();
      errorMessage("Email not found");
      return false;
    }
    toogleLoading();
    return true;
    // const newChat = {
    //   id: uuidv4(),
    //   user: {
    //     id: uuidv4(),
    //     name: PERSON_NAMES[Math.floor(Math.random() * PERSON_NAMES.length)],
    //     photoURL: `https://randomuser.me/api/portraits/men/${
    //       Math.floor(Math.random() * 50) + 1
    //     }.jpg`,
    //     email: email,
    //   },
    //   messages: [] as MessageProps[],
    // };
    // setChats((prevChats) => [...prevChats, newChat]);
    // setActiveChatID(newChat.id);
  }

  function handleSetAdctiveChatID(chatID: string) {
    setActiveChatID(chatID);
  }

  function handleChatMessage(
    message: string,
    userId: string | null | undefined
  ) {
    const newMessage = {
      id: uuidv4(),
      userID: userId,
      message: message,
      datetime: new Date().toISOString(),
    } as MessageProps;
    const chat = chats.filter((chat) => chat.id === activeChatID)[0];
    chat.messages.push(newMessage);
    const newChatsList = chats.map((data) => {
      if (data.id === activeChatID) {
        return chat;
      }
      return data;
    });
    setChats(newChatsList);
    setCurrentChat(chat);
  }

  function handleNewMessages(message: string) {
    handleChatMessage(message, getUserData().id);
    setTimeout(() => {
      handleChatMessage(
        MESSAGES[Math.floor(Math.random() * MESSAGES.length)],
        currentChat.user.id
      );
    }, Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000);
  }

  return (
    <ChatsContext.Provider
      value={{
        chats,
        activeChatID,
        isChatListEmpty,
        currentChat,
        handleNewMessages,
        handleCreateNewChat,
        handleSetAdctiveChatID,
      }}
    >
      {children}
    </ChatsContext.Provider>
  );
}

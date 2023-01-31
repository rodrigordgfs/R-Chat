import { ChatText, Envelope, Person, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { FormEvent, useContext, useState } from "react";
import { SettingsContext } from "../../contexts/settings";
import { ChatsContext } from "../../contexts/chats";
import { toast } from "react-toastify";

interface NewChatProps {
  smallIcon?: boolean;
}

export function NewChat({ smallIcon }: NewChatProps) {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toogleDrawer } = useContext(SettingsContext);
  const { handleCreateNewChat, checkIfEmailAlreadyExists } =
    useContext(ChatsContext);

  function handleNewChat(e: FormEvent) {
    e.preventDefault();
    if (checkIfEmailAlreadyExists(email)) {
      toast.warning("There is already a conversation with this user", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
      return;
    }
    handleCreateNewChat(email);
    setEmail("");
    setIsModalOpen(false);
  }
 
  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Trigger>
        <div
          className={`${
            smallIcon ? "h-10 w-10" : "h-12 w-12"
          } rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer`}
          onClick={toogleDrawer}
        >
          <ChatText size={smallIcon ? 20 : 28} className="text-white" />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
        <Dialog.Content className="absolute p-10 bg-zinc-800 shadow-xl rounded-2xl w-full max-w-md mx-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Close>
            <X
              size={24}
              aria-label="Fechar"
              className="absolute right-6 top-6 text-zinc-400 hover:text-blue-700"
            />
          </Dialog.Close>
          <Dialog.Title>
            <p className="text-white font-semibold text-3xl">New Chat</p>
          </Dialog.Title>
          <form className="flex flex-col mt-6 gap-4" onSubmit={handleNewChat}>
            <div className="flex flex-row items-center rounded-lg gap-4 p-4 bg-zinc-900">
              <Envelope size={20} className="text-zinc-400" />
              <input
                type="email"
                placeholder="Enter the user's email"
                className="bg-transparent text-white outline-none w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="py-3 rounded-lg shadow-lg font-semibold w-full bg-blue-700 hover:bg-blue-600 transition-colors text-white"
            >
              Continue
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

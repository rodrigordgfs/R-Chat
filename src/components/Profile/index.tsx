import * as Dialog from "@radix-ui/react-dialog";
import { Article, Image, Person, X } from "phosphor-react";
import { FormEvent, useState } from "react";

export function Profile() {
    const [name, setName] = useState("Rodrigo Shinoda");
    const [about, setAbout] = useState("I'm a web developer ReactJS and VueJS");

    function handleSaveProfile(e: FormEvent) {
        e.preventDefault();
    }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="h-12 w-12 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
          <img
            src="https://i.imgur.com/8LNBW16.jpg"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
        <Dialog.Content className="absolute p-10 bg-zinc-800 shadow-xl rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Close>
            <X
              size={24}
              aria-aria-label="Fechar"
              className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-600"
            />
          </Dialog.Close>
          <Dialog.Title className="flex flex-row items-center justify-center -mt-28">
            <div className="h-44 w-44 rounded-full shadow-lg flex items-center justify-center bg-zinc-900">
              <div className="relative">
                <img
                  src="https://i.imgur.com/8LNBW16.jpg"
                  className="h-40 w-40 rounded-full"
                />
                <div className="absolute bottom-0 right-0 h-10 w-10 rounded-full flex items-center justify-center shadow-lg bg-zinc-900 hover:bg-zinc-700 transition-colors cursor-pointer">
                  <Image size={20} className="text-white" />
                </div>
              </div>
            </div>
          </Dialog.Title>
          <form className="flex flex-col mt-6 gap-4" onSubmit={handleSaveProfile}>
            <div className="flex flex-row items-center rounded-lg gap-4 p-4 bg-zinc-900">
              <Person size={20} className="text-zinc-400" />
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent text-white outline-none w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-row items-start rounded-lg gap-4 p-4 bg-zinc-900">
              <Article size={20} className="text-zinc-400" />
              <textarea
                placeholder="About"
                className="bg-transparent text-white outline-none w-full"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
            <button type="submit" className="py-3 rounded-lg shadow-lg font-semibold w-full bg-blue-700 text-white">Save</button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

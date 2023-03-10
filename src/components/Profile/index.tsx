import * as Dialog from "@radix-ui/react-dialog";
import { Article, Envelope, Image, Person, X } from "phosphor-react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { SettingsContext } from "../../contexts/settings";
import { UserContext } from "../../contexts/user";

export function Profile() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("" as string | undefined);
  const [about, setAbout] = useState("");

  const { toogleDrawer } = useContext(SettingsContext);
  const { getUserData, handleUpdateUserInfo } = useContext(UserContext);

  useEffect(() => {
    setImage(getUserData().photoURL);
    setName(getUserData().displayName);
    setEmail(getUserData().email);
    setAbout(getUserData().about);
  }, []);

  function handleSaveProfile(e: FormEvent) {
    e.preventDefault();
    handleUpdateUserInfo(image, name, about);
  }

  function handleChangeImage(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div
          className="h-12 w-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
          onClick={toogleDrawer}
        >
          <img src={image} className="h-8 w-8 rounded-full" />
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
          <Dialog.Title className="flex flex-row items-center justify-center -mt-36">
            <div className="h-44 w-44 rounded-full shadow-lg flex items-center justify-center bg-zinc-900">
              <div className="relative">
                <img
                  src={image ?? "https://i.imgur.com/0sluqzx.png"}
                  className="h-40 w-40 rounded-full"
                />
                <input
                  style={{ display: "none" }}
                  type="file"
                  accept="image/*"
                  id="image-picker"
                  onChange={handleChangeImage}
                />
                <label
                  htmlFor="image-picker"
                  className="absolute bottom-0 right-0 h-10 w-10 rounded-full flex items-center justify-center shadow-lg bg-zinc-900 hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  <Image size={20} className="text-white" />
                </label>
              </div>
            </div>
          </Dialog.Title>
          <form
            className="flex flex-col mt-6 gap-4"
            onSubmit={handleSaveProfile}
          >
            <div className="flex flex-row items-center rounded-lg gap-4 p-4 bg-zinc-900">
              <Envelope size={20} className="text-zinc-400" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent text-gray-500 outline-none w-full"
                value={email}
                readOnly
              />
            </div>
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
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 transition-colors text-white rounded-md h-9 mt-2 font-semibold"
            >
              Save
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

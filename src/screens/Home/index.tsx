import { Chats } from "../../components/Chats"
import { Conversation } from "../../components/Conversation"

export function Home() {
  return (
    <main className="bg-zinc-300 w-screen h-screen flex justify-center">
      <div className="w-screen h-screen bg-white mx-0 my-auto flex flex-row shadow-md">
        <Chats />
        <Conversation />
      </div>
    </main>
  )
}
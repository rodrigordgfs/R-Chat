import { Chats } from "./components/Chats"
import { Conversation } from "./components/Conversation"

function App() {
  return (
    <main className="bg-blue-300 w-screen h-screen flex justify-center">
      <div className="w-3/4 h-96 bg-white mx-0 my-auto flex flex-row rounded-lg shadow-md">
        <Chats />
        <Conversation />
      </div>
    </main>
  )
}

export default App

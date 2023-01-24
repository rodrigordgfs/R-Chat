import { DotsThreeVertical } from 'phosphor-react'

export function ConversationHeader() {
  return (
    <div className="w-full h-16 bg-blue-600 border-l-2 border-blue-400 flex flex-row items-center px-4 gap-4 shadow-lg">
      <img
        src="https://randomuser.me/api/portraits/men/45.jpg"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1 flex flex-col">
        <span className="text-white font-bold">John Doe</span>
        <span className="text-white text-xs">Active 1h ago</span>
      </div>
        <div className='h-8 w-8 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer'>
            <DotsThreeVertical size={24} className='text-white' />
        </div>
    </div>
  );
}

import { DotsThreeVertical, List,  } from 'phosphor-react'

export function ConversationHeader() {
  return (
    <div className="w-full h-16 bg-zinc-900 border-l-2 border-zinc-800 flex flex-row items-center px-4 gap-4 shadow-lg">
      <div className='flex flex-row items-center gap-4'>
        <div className='lg:hidden flex items-center justify-center h-10 w-10 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer'>
          <List size={24} className='text-white' />
        </div>
      <img
        src="https://randomuser.me/api/portraits/men/45.jpg"
        className="w-10 h-10 rounded-full"
      />
      </div>
      <div className="flex-1 flex flex-col">
        <span className="text-white font-bold">John Doe</span>
        <span className="text-white text-xs">Active 1h ago</span>
      </div>
        <div className='h-10 w-10 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer'>
            <DotsThreeVertical size={24} className='text-white' />
        </div>
    </div>
  );
}

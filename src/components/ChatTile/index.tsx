import { formatDistanceToNow } from 'date-fns'

interface ChatTileProps {
  image: string;
  name: string;
  lastMessage: string;
  datetime: string;
}

export function ChatTile({
  image,
  name,
  lastMessage,
  datetime,
}: ChatTileProps) {
  const dateDistance = formatDistanceToNow(new Date(datetime), { addSuffix: true })
  return (
    <div className="flex flex-row items-center gap-4 p-4 hover:bg-blue-500 transition-colors cursor-pointer">
      <img src={image} className="h-14 w-14 rounded-full shadow-md" />
      <div className="flex-1 flex flex-col">
        <div className="flex flex-row items-center justify-between gap-2">
          <span className="text-white font-bold">{name}</span>
          <span className='text-white text-sm'>{dateDistance}</span>
        </div>
        <span className='text-sm text-zinc-200'>{lastMessage}</span>
      </div>
    </div>
  );
}

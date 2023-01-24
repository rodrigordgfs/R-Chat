import { MagnifyingGlass } from 'phosphor-react'

export function SearchChat() {
  return (
    <div className="shadow-lg h-16 flex items-center justify-center px-4">
      <form className="w-full  flex flex-row gap-4 items-center bg-blue-300 rounded-lg px-4">
        <MagnifyingGlass size={20} className='text-white' />
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 rounded-lg focus:outline-none bg-blue-300 placeholder:text-white text-white"
        />
      </form>
    </div>
  );
}

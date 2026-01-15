
const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center ">
        
        <form className=" p-4 grid grid-cols-12 gap-1 rounded-e-full rounded-s-full w-1/2 z-20 ">
            <input 
                type="text" 
                placeholder="What would you like to watch today?" 
                className=" bg-gray-400 rounded-l-full p-2 col-span-9 text-black cursor-pointer "
            />
            <button
            type="button"
                className="rounded-r-full p-2 bg-red-800 text-white col-span-3 cursor-pointer"
            >
                Search
            </button>
        </form>
        
    </div>
  )
}

export default GptSearchBar
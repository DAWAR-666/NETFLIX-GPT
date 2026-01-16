import client from "./gemini";
import { useRef } from "react"

const GptSearchBar = () => {
    const searchText=useRef(null);
    const handleGptSearch = async() => {
        const gptResult=await client.chat.completions.create({
            model: 'gemini-3-flash-preview',
            messages: [
                { role: 'user', content: 'Are semicolons optional in JavaScript?' },
            ],
        });
        console.log(gptResult.choices[0].message.content);
    }
  return (
    <div className="pt-[10%] flex justify-center ">
        
        <form className=" p-4 grid grid-cols-12 gap-1 rounded-e-full rounded-s-full w-1/2 z-20 ">
            <input 
                ref={searchText}
                type="text" 
                placeholder="What would you like to watch today?" 
                className=" bg-gray-400 rounded-l-full p-2 col-span-9 text-black cursor-pointer "
            />
            <button
            type="button"
                className="rounded-r-full p-2 bg-red-800 text-white col-span-3 cursor-pointer"
                onClick={handleGptSearch}
            >
                Search
            </button>
        </form>
        
    </div>
  )
}

export default GptSearchBar
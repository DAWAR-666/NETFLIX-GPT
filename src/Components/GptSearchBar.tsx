import client from "./gemini";
import { useRef } from "react"

const GptSearchBar = () => {
    const searchText=useRef(null);


    const handleGptSearch = async () => {

        const query = "act as a movie recommendation engine and recommend only 5 movies based on the user's query: " + searchText?.current?.value + ". only respond with the movie titles separated by commas.and only give 5 titles.";
        searchText.current.value = "";
        try {
            // Change: Use generateContent instead of chat.completions.create
            const result = await client.generateContent(query);
            const response = await result.response;
            const text = response.text();
            const movieResult=text.split(",");
            console.log(text);
        } catch (error) {
            console.error("Gemini SDK Error:", error);
        }
        
    };
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
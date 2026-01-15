import { bgImg } from "../Utils/Const"
import GptSearchBar from "./GptSearchBar"
import GptSuggestions from "./GptSuggestions"


const Gpt = () => {
  return (
    <div>
        <div className="absolute ">
            <img src={bgImg} alt="bgImg" className="h-screen w-screen" />
        </div>
        <div className="relative bg-linear-to-t from-black/30 to-black/70 h-screen">
        <GptSearchBar />
        <GptSuggestions />
        </div>
    </div>
  )
}

export default Gpt
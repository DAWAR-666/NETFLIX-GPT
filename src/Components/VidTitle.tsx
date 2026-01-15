import { useState } from "react";
interface VidTitleProps {
  title: string;
  overview: string;
}
const VidTitle: React.FC<VidTitleProps> = ({title, overview}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLongText = overview?.length > 100;
    return (
        <div className="px-8 space-y-4 absolute text-white bg-linear-to-r from-black via-transparent to-transparent aspect-video flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl">{title}</h2>
            <div className="w-1/3 relative"> 
                
                <p className={`text-sm md:text-lg ${!isExpanded ? "line-clamp-2" : ""}`}>
                    {overview}
                </p>

                
                {isLongText && (
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className=" hover:text-red-400 font-bold cursor-pointer transition-colors"
                    >
                        {isExpanded ? " (show less)" : "(show more)"}
                    </button>
                )}
            </div>
            <div className="space-x-4 text-lg md:text-xl">
                <button className="bg-white 
                                    hover:bg-white/65 
                                    transition 
                                    text-black 
                                    rounded-lg 
                                    border-2 
                                    border-black 
                                    p-1 
                                    px-5 
                                    cursor-pointer ">▶️Play</button>
                <button className="bg-gray-500/50 hover:bg-gray-700/50 transition text-white rounded-lg border-2 border-black p-1 px-5 cursor-pointer">More Info</button>
            </div>
            
        </div>
    )
}
export default VidTitle;
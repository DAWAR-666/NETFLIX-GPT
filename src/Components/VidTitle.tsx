import { useState } from "react";

const VidTitle = ({title, overview}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLongText = overview?.length > 100;
    return (
        <div className="pt-38 px-8 space-y-4 ">
            <h2 className="text-3xl md:text-5xl">{title}</h2>
            <div className="w-1/3 relative"> 
                
                <p className={`text-sm md:text-lg ${!isExpanded ? "line-clamp-2" : ""}`}>
                    {overview}
                </p>

                
                {isLongText && (
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-black hover:text-gray-400 font-bold cursor-pointer transition-colors"
                    >
                        {isExpanded ? " (show less)" : "(show more)"}
                    </button>
                )}
            </div>
            <div className="space-x-4 text-lg md:text-xl">
                <button className="bg-white text-black rounded-lg border-2 border-black p-1 px-5 cursor-pointer ">▶️Play</button>
                <button className="bg-gray-500/75 text-white rounded-lg border-2 border-black p-1 px-5 cursor-pointer">More Info</button>
            </div>
            
        </div>
    )
}
export default VidTitle;


import { useSelector } from "react-redux";
import useGetTrailer from "../Hooks/useGetTrailer";
interface VidBgProps {
    Mid: number;
}
const VidBg: React.FC<VidBgProps> = ({Mid}) => {
    const TrailerKey=useSelector((store:any)=>store.movies?.trailerVideoId);
   useGetTrailer(Mid);
    return (
        <div>
            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${TrailerKey}?si=oOn5Fy1MgnPs0AH-`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                >
                    
                </iframe>
        </div>
    )
}
export default VidBg;
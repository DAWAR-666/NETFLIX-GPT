import { useEffect } from "react";
import { APIoptions } from "../Utils/Const";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideoId } from "../Utils/movieSlice";
interface VidBgProps {
    Mid: number;
}
const VidBg: React.FC<VidBgProps> = ({Mid}) => {
    const TrailerKey=useSelector((store:any)=>store.movies?.trailerVideoId);
    const dispatch=useDispatch();
    const getTrailer=async() => {
        const data=await fetch(`https://api.themoviedb.org/3/movie/${Mid}/videos?language=en-US`, APIoptions)
        const jsonData=await data.json();
        const trailers = jsonData.results.filter((video: { type: string; }) => video.type === "Trailer");
        const toPlay=trailers.length? trailers[0]:"";
        dispatch(addTrailerVideoId(toPlay.key));

    }
    useEffect(()=>{
        getTrailer();
    },[Mid])
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
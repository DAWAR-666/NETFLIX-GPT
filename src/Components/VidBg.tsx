import { useEffect } from "react";
import { APIoptions } from "../Utils/Const";
interface VidBgProps {
    Mid: number;
}
const VidBg: React.FC<VidBgProps> = ({Mid}) => {
    const getTrailer=async() => {
        const data=await fetch(`https://api.themoviedb.org/3/movie/${Mid}/videos?language=en-US`, APIoptions)
        const jsonData=await data.json();
        console.log("Trailer Data:", jsonData);
    }
    useEffect(()=>{
        getTrailer();
    },[])
    return (
        <div>VidBg</div>
    )
}
export default VidBg;
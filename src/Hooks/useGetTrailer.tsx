import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideoId } from "../Utils/movieSlice";
import { useEffect } from "react";
import { APIoptions } from "../Utils/Const";
import type { RootState } from "../Utils/appStore";



    const useGetTrailer=(Mid:number)=>{
        const trailerId=useSelector((state:RootState)=>state.movies.trailerVideoId);
        const dispatch=useDispatch();
        const getTrailer=async() => {
        const data=await fetch(`https://api.themoviedb.org/3/movie/${Mid}/videos?language=en-US`, APIoptions)
        const jsonData=await data.json();
        const trailers = jsonData.results.filter((video: { type: string; }) => video.type === "Trailer");
        const toPlay=trailers.length? trailers[0]:"";
        dispatch(addTrailerVideoId(toPlay.key));

    }
    useEffect(()=>{
        !trailerId && getTrailer();
    },[Mid])
    };
    export default useGetTrailer;
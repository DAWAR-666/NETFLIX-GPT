
import { useDispatch, useSelector } from "react-redux";
import { APIoptions } from "../Utils/Const";
import { addNowMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useNowPlaying=()=>{
  const nowPlaying=useSelector((state)=>state.movies.nowPlaying);
    const dispatch=useDispatch();
  const getNowPlaying=async()=>{
    const data=await fetch ('https://api.themoviedb.org/3/movie/now_playing?page=1'
        ,APIoptions);
    const jsonData=await data.json();
    dispatch(addNowMovies(jsonData.results));
  }
  useEffect(()=>{
    !nowPlaying && getNowPlaying();
  },[])
}
export default useNowPlaying;
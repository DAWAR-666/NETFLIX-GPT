
import { useDispatch } from "react-redux";
import { APIoptions } from "../Utils/Const";
import { addNowMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useNowPlaying=()=>{
    const dispatch=useDispatch();
  const getNowPlaying=async()=>{
    const data=await fetch ('https://api.themoviedb.org/3/movie/now_playing?page=1'
        ,APIoptions);
    const jsonData=await data.json();
    dispatch(addNowMovies(jsonData.results));
    console.log(jsonData);
  }
  useEffect(()=>{
    getNowPlaying();
  },[])
}
export default useNowPlaying;
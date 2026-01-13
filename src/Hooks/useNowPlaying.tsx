
import { APIoptions } from "../Utils/Const";

const getNowPlaying=async()=>{
    const data=await fetch ('https://api.themoviedb.org/3/movie/now_playing?page=1',
        APIoptions);
    const jsonData=await data.json();
    console.log(jsonData);
  }
  export default getNowPlaying;
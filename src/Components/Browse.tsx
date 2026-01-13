
import { useEffect } from "react";
import { APIoptions } from "../Utils/Const";
import Header from "./Header"


const Browse = () => {
  const getNowPlaying=async()=>{
    const data=await fetch ('https://api.themoviedb.org/3/movie/now_playing?page=1',APIoptions);
    const jsonData=await data.json();
    console.log(jsonData);
  }
  useEffect(()=>{
    getNowPlaying();
  },[])
  
  return (
    
        <div>
          <Header />
          </div>
        
    
  )
}
export default Browse
import { useSelector } from "react-redux";
import VidTitle from "./VidTitle";
import VidBg from "./VidBg";

const MainCont = () => {
    const movies=useSelector(store=>store.movies?.nowPlaying);
    if (!movies) return <div>Loading...</div>;
    const randomIndex = Math.floor(Math.random() * movies.length);
    const selectedMovie = movies[randomIndex];
    console.log("Selected Movie:", selectedMovie);
    const {title,original_title, overview} = selectedMovie;
    
  return (
    <div>
        <VidTitle title={title} overview={overview} org_title={original_title}/>
        <VidBg />
    </div>
  )
}
export default MainCont;
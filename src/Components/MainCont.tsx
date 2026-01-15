import { useSelector } from "react-redux";
import VidTitle from "./VidTitle";
import VidBg from "./VidBg";

const MainCont = () => {
    const movies=useSelector(store=>store.movies?.nowPlaying);
    if (!movies || movies.length === 0) return <div>Loading...</div>;
    const randomIndex = Math.floor(Math.random() * movies.length);
    const selectedMovie = movies[randomIndex];
    console.log("Selected Movie:", selectedMovie);
    const {title, overview} = selectedMovie;
    
  return (
    <div>
        <VidTitle title={title} overview={overview} />
        <VidBg />
    </div>
  )
}
export default MainCont;
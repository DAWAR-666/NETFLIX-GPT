import { useSelector } from "react-redux";
import VidTitle from "./VidTitle";
import VidBg from "./VidBg";
interface Movie {
  title: string;
  overview: string;
  id: number;
}
const MainCont = () => {
    const movies=useSelector(store=>store.movies?.nowPlaying);
    if (!movies || movies.length === 0) return <div>Loading...</div>;
    const randomIndex = Math.floor(Math.random() * movies.length);
    const selectedMovie = movies[randomIndex];
    const {title, overview,id}:Movie= selectedMovie;
    
  return (
    <div>
        <VidTitle title={title} overview={overview} />
        <VidBg Mid={id} />
    </div>
  )
}
export default MainCont;
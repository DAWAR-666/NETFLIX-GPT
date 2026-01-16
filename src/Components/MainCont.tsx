import { useSelector } from "react-redux";
import VidTitle from "./VidTitle";
import VidBg from "./VidBg";
import type { RootState } from "../Utils/appStore";
interface Movie {
  title: string;
  overview: string;
  id: number;
}
const MainCont = () => {
    const movies=useSelector((store:RootState)=>store.movies?.nowPlaying);
    if (!movies ) return <div className="flex justify-center h-screen items-center text-5xl">Loading...</div>;
    // @ts-expect-error - movies.length is valid but inferred as never
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
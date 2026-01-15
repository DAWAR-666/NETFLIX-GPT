import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecCont = () => {
    const movies=useSelector((state:any)=>state.movies.nowPlaying);
    return (
        <div className="bg-black">
            <div className="-mt-50 px-6 relative z-20">
                <MovieList title="Now Playing" movies={movies}/>
                <MovieList title="Now Playing" movies={movies}/>
                <MovieList title="Now Playing" movies={movies}/>
                <MovieList title="Now Playing" movies={movies}/>

            </div>
        </div>
    )
}  
export default SecCont;
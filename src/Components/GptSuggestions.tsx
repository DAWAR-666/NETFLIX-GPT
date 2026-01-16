import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const {movieListResult,movieNamesResult}=useSelector((state)=>state.gptview);
  if(!movieNamesResult){
    return null;
  }
  return (
    <div className="p-4 m-4 bg-black/80 text-white flex justify-center ">
      <div>
        {movieNamesResult.map((name: string,index:number) => (
          <MovieList key={name} title={name} movies={movieListResult[index]} />
        ))}
      </div>
    </div>
  )
}

export default GptSuggestions
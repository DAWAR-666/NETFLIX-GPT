import { imgUrl } from "../Utils/Const"
const MovieCard = ({poster}: {poster: string}) => {
  if(!poster){
    return null;
  }

  return (
    <div className="m-2 shrink-0">
        <img className="w-40 rounded-md " 
        src={imgUrl+poster} 
        alt={poster} />
    </div>
  )
}

export default MovieCard
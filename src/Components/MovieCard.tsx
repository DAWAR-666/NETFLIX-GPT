import { imgUrl } from "../Utils/Const"
const MovieCard = ({movie}) => {

  return (
    <div className="m-2 shrink-0">
        <img className="w-40 rounded-md " 
        src={imgUrl+movie.poster_path} 
        alt={movie.title} />
    </div>
  )
}

export default MovieCard
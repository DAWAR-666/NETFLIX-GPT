import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
  return (
    <div>
        <h1 className="text-2xl font-bold text-white px-3">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
            {movies.map((movie) => (
                <MovieCard key={movie.id} poster={movie.poster_path} />
            ))}
        </div>
    </div>
  )
}

export default MovieList
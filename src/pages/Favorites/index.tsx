import { IMovie } from "@/types";
import MovieCard from "./components/MovieCard";
import { useGlobalContext } from "@/context/globalContext";

const Favorites = () => {
  const { favoriteMovies } = useGlobalContext();

  return (
    <div className=" pt-16">
      {favoriteMovies?.map((movie: IMovie) => {
        return (
          <div
            key={movie.id}
            className="py-6 w-full flex justify-center align-center  bg-black"
          >
            <MovieCard movie={movie} />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;

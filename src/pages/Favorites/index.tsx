import { IMovie } from "@/types";
import { MovieCard, CreteUser } from "./components";
import { useGlobalContext } from "@/context/globalContext";

const Favorites = () => {
  const { favoriteMovies, user } = useGlobalContext();

  if (user && favoriteMovies.length === 0) {
    return (
      <div className="text-[#d1d1d1] text-[14px] bg-black g	px-4 pt-24 sm:text-base xs:text-[15.75px] text-[14.25px] leading-relaxed text-center ]">
        There are no movies added to favorites.
      </div>
    );
  }

  return (
    <div className=" pt-16">
      {user ? (
        favoriteMovies?.map((movie: IMovie) => {
          return (
            <div
              key={movie.id}
              className="py-6 w-full flex justify-center align-center  bg-black"
            >
              <MovieCard movie={movie} />
            </div>
          );
        })
      ) : (
        <div className="flex ">
          <CreteUser />
        </div>
      )}
    </div>
  );
};

export default Favorites;

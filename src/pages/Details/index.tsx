import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

import { Poster, Loader, Error, Button } from "@/common";
import { Casts, Videos, Genre } from "./components";
import { useGlobalContext } from "@/context/globalContext";

import { useGetMovieQuery } from "@/services/TMDB";
import { mainHeading, maxWidth, paragraph } from "@/styles";
import { cn } from "@/utils/helper";

const Detail = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isFetching,
    isError
  } = useGetMovieQuery({
    id: Number(id)
  });
  const { addFavoriteMovie, removeFavoriteMovie, favoriteMovies } =
    useGlobalContext();
  let isFavorite = favoriteMovies.some(movie => movie.id == id);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <Error error="Something went wrong!" />;
  }

  const {
    title,
    poster_path: posterPath,
    overview,
    name,
    genres,
    videos,
    credits
  } = movie;

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0,0.98),rgba(0,0,0,0.8) ,rgba(0,0,0,0.4)),url('https://image.tmdb.org/t/p/original/${posterPath}'`,
    backgroundPosition: "top",
    backgroundSize: "cover"
  };
  const handleAddFavorite = () => {
    addFavoriteMovie(movie);
  };
  const handleRemoveFavorite = () => {
    removeFavoriteMovie(Number(movie.id));
  };
  console.log("handleAddFavorite", isFavorite);
  return (
    <>
      <section className="w-full" style={backgroundStyle}>
        <div
          className={`${maxWidth} lg:py-36 sm:py-[136px] sm:pb-28 xs:py-28 xs:pb-12 pt-24 pb-8 flex flex-row lg:gap-12 md:gap-10 gap-8 justify-center `}
        >
          <Poster title={title} posterPath={posterPath} />
          <div className="text-gray-300 sm:max-w-[80vw] max-w-[90vw]  md:max-w-[520px] font-nunito flex flex-col lg:gap-5 sm:gap-4 xs:gap-[14px] gap-3 mb-8 flex-1">
            <div className="flex flex-row  flex justify-between">
              <h2 className={cn(mainHeading, " md:max-w-[420px]")}>
                {title || name}
              </h2>
              <div className="text-[26px]   z-[1] ml-[-30px] pt-1">
                {isFavorite ? <FaStar /> : <CiStar />}
              </div>
            </div>

            <ul className="flex flex-row items-center  sm:gap-[14px] xs:gap-3 gap-[6px] flex-wrap">
              {genres.map((genre: { name: string; id: number }) => {
                return <Genre key={genre.id} name={genre.name} />;
              })}
            </ul>

            <p className={paragraph}>
              <span>{overview}</span>
            </p>
            <Button
              title={isFavorite ? "Remove from favorite" : "Add to favorite"}
              className=""
              onClick={isFavorite ? handleRemoveFavorite : handleAddFavorite}
            />

            <Casts casts={credits?.cast || []} />
          </div>
        </div>
      </section>

      <Videos videos={videos.results} />
    </>
  );
};

export default Detail;

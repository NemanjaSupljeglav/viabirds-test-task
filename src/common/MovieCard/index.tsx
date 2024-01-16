import { memo } from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaStar } from "react-icons/fa";

import Image from "../Image";
import { useGlobalContext } from "@/context/globalContext";
import { IMovie } from "@/types";
import { useMediaQuery } from "usehooks-ts";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const { getTrailerId, toggleModal } = useGlobalContext();
  const {
    poster_path,
    original_title: title,
    name,
    id,
    vote_average: rate
  } = movie;
  const isMobile = useMediaQuery("(max-width: 380px)");

  const showTrailer = () => {
    getTrailerId(id);
    toggleModal();
  };

  return (
    <>
      <Link
        to={`/details/${id}`}
        className="bg-black rounded-lg relative group w-[170px] select-none xs:h-[250px] h-[216px] overflow-hidden"
      >
        <Image
          height={!isMobile ? 250 : 216}
          width={!isMobile ? 170 : 140}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={movie.original_title}
          className="object-cover rounded-lg drop-shadow-md shadow-md group-hover:shadow-none group-hover:drop-shadow-none transition-all duration-300 ease-in-out
          zoomInEffect"
        />
        <div className="absolute top-1 right-1 flex bg-[rgba(0,0,0,0.6)] justify-center items-center px-1 rounded-md	">
          <p className="text-primary text-[14px] font-medium">
            {rate?.toFixed(1) || 0}
          </p>
          <FaStar color="yellow" className="mb-[0.5px] ml-1" />
        </div>
        <div className="absolute top-0 left-0 w-[170px]  h-full group-hover:opacity-100 opacity-0 bg-[rgba(0,0,0,0.6)] transition-all duration-300 rounded-lg flex items-center justify-center">
          <div
            onClick={e => {
              e.preventDefault();
              showTrailer();
            }}
            className="text-[16px]  text-[#ff0000] scale-[0.4] group-hover:scale-100 transition-all duration-300 flex justify-center items-center	mt-[120%]  mx-3 rounded-full bg-glowLight  hover:bg-[rgba(0,0,0,0.6)]  px-2"
          >
            <p className="mr-2 text-primary">Watch Trailer</p> <FaYoutube />
          </div>
        </div>
      </Link>

      <h4 className="text-gray-300 text-center cursor-default sm:text-base xs:text-[14.75px] text-[14px] font-medium">
        {(title?.length > 50 ? title.split(":")[0] : title) || name}
      </h4>
    </>
  );
};

export default memo(MovieCard, (prevProps, newProps) => {
  return prevProps.movie.id === newProps.movie.id;
});

import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { Poster, Button } from "@/common";
import { useGlobalContext } from "@/context/globalContext";
import { mainHeading, maxWidth, paragraph } from "@/styles";
import { IMovie } from "@/types";
import { cn } from "@/utils/helper";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const { getTrailerId, toggleModal } = useGlobalContext();
  const navigate = useNavigate();

  const {
    overview,
    original_title: title,
    poster_path: posterPath,
    id
  } = movie;

  const handleTrailer = () => {
    getTrailerId(id);
    toggleModal();
  };

  const handleDetails = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className={cn(
        maxWidth,
        ` mx-auto flex items-center h-full  flex-row lg:gap-32 sm:gap-20`
      )}
    >
      <div className="text-gray-300 sm:max-w-[80vw] max-w-[90vw]  md:max-w-[420px] font-nunito flex flex-col sm:gap-5 xs:gap-3 gap-[10px] sm:mb-8">
        <h2 className={cn(mainHeading)}>{title}</h2>
        <p className={paragraph}>
          {overview.length > 180 ? `${overview.slice(0, 180)}...` : overview}
        </p>
        <div className="flex flex-row items-center  gap-4 sm:mt-6 xs:mt-5 mt-[18px] ">
          <Button
            title={"Watch Trailer"}
            className="w-full"
            onClick={handleTrailer}
          />
          <Button
            title={"Check Details"}
            className="w-full"
            onClick={handleDetails}
          />
        </div>
      </div>

      <Poster title={title} posterPath={posterPath} className="mr-auto" />
    </div>
  );
};

export default memo(MovieCard);

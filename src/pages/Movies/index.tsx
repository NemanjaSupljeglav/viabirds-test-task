import { useState, useEffect } from "react";

import { SkelatonLoader, InfiniteScroll, Error } from "@/common";
import { CatalogHeader, Search, MovieCard, RatingInput } from "./components";
import { useGetMoviesQuery } from "@/services/TMDB";
import { IMovie } from "@/types";

const Movies = () => {
  const [page, setPage] = useState<number>(1);
  const [moves, setMovies] = useState<IMovie[]>([]);
  const [search, setSearch] = useState<string>("");
  const [rangeFrom, setRangeFrom] = useState<number>(0);
  const [rangeTo, setRangeTo] = useState<number>(10);

  const { data, isLoading, isError } = useGetMoviesQuery({
    page,
    search,
    rangeFrom,
    rangeTo
  });

  useEffect(() => {
    setPage(1);
    setRangeFrom(0);
    setRangeTo(10);
  }, [search]);

  useEffect(() => {
    setSearch("");
    setPage(1);
  }, [rangeFrom, rangeTo]);

  useEffect(() => {
    if (isLoading) return;
    if (data?.results) {
      if (page > 1) {
        setMovies(prev => [...prev, ...data.results]);
      } else {
        setMovies([...data.results]);
      }
    }
  }, [data, isLoading, page]);

  const handleScrollEnd = () => {
    setPage(pre => pre + 1);
  };
  if (isError) {
    return <Error error="Unable to fetch the movies! " />;
  }
  return (
    <InfiniteScroll onScrollEnd={handleScrollEnd}>
      <CatalogHeader />
      <div className="max-w-[940px] mx-auto md:px-8 sm:px-6 px-4 xl:px-0">
        <div className="flex flex-wrap xs:gap-4 gap-[14px] justify-center lg:my-16 my-6 mr-6">
          <Search setSearch={setSearch} />
          <RatingInput
            rangeFrom={rangeFrom}
            setRangeFrom={setRangeFrom}
            rangeTo={rangeTo}
            setRangeTo={setRangeTo}
          />
        </div>

        {isLoading ? (
          <SkelatonLoader isMoviesSliderLoader={false} />
        ) : (
          <div className="flex flex-wrap xs:gap-4 gap-[14px] justify-center">
            {moves.length > 0 ? (
              moves?.map((movie, index) => (
                <div
                  key={index}
                  className="flex flex-col xs:gap-4 gap-2 xs:max-w-[170px] max-w-[144px] rounded-lg lg:mb-6 md:mb-5 sm:mb-4 mb-[10px]"
                >
                  <MovieCard movie={movie} />
                </div>
              ))
            ) : (
              <div className="text-[#d1d1d1] text-[14px]  bg-warning p-2 rounded-lg	px-4">
                There are no movies available for the requested input.
              </div>
            )}
          </div>
        )}
      </div>
    </InfiniteScroll>
  );
};

export default Movies;

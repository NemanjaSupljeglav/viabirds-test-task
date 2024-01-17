import { useState, useEffect } from "react";

import { MovieCard, SkelatonLoader, InfiniteScroll } from "@/common";
import { CatalogHeader, Search, RatingInput } from "./components";
import { useGetMoviesQuery } from "@/services/TMDB";
import { smallMaxWidth } from "@/styles";
import { IMovie } from "@/types";

const Movies = () => {
  const [page, setPage] = useState<number>(1);
  const [moves, setMovies] = useState<IMovie[]>([]);
  const [search, setSearch] = useState<string>("");
  const [rangeFrom, setRangeFrom] = useState<number>(0);
  const [rangeTo, setRangeTo] = useState<number>(10);

  const { data, isLoading, isFetching } = useGetMoviesQuery({
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
  }, [rangeFrom, rangeTo]);

  useEffect(() => {
    if (isLoading || isFetching) return;

    if (data?.results) {
      if (page > 1) {
        setMovies(prev => [...prev, ...data.results]);
      } else {
        setMovies([...data.results]);
      }
    }
  }, [data, isFetching, isLoading, page]);

  const handleScrollEnd = () => {
    setPage(pre => pre + 1);
  };

  return (
    <InfiniteScroll onScrollEnd={handleScrollEnd}>
      <CatalogHeader />
      <div className={`${smallMaxWidth}`}>
        <div className="flex flex-wrap xs:gap-4 gap-[14px] justify-center lg:my-16 my-6 mr-6">
          <Search setSearch={setSearch} search={search} />

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
            {moves?.map((movie, index) => (
              <div
                key={index}
                className="flex flex-col xs:gap-4 gap-2 xs:max-w-[170px] max-w-[144px] rounded-lg lg:mb-6 md:mb-5 sm:mb-4 mb-[10px]"
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}

        {isFetching && (
          <SkelatonLoader
            isMoviesSliderLoader={false}
            className="md:pt-8 sm:pt-7 pt-6"
          />
        )}
      </div>
    </InfiniteScroll>
  );
};

export default Movies;

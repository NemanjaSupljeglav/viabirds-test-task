import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_KEY, TMDB_API_BASE_URL } from "@/utils/config";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: TMDB_API_BASE_URL }),

  endpoints: builder => ({
    getMovies: builder.query({
      query: ({
        search,
        page,
        rangeFrom,
        rangeTo
      }: {
        page?: number;
        search?: string;
        rangeFrom?: number;
        rangeTo?: number;
      }) => {
        if (search) {
          return `search/movie?api_key=${API_KEY}&query=${search}&page=${page}`;
        }
        return `discover/movie?api_key=${API_KEY}&page=${page}&vote_average.gte=${rangeFrom}&vote_average.lte=${rangeTo}`;
      }
    }),

    getMovie: builder.query({
      query: ({ id }: { id: number }) =>
        `movie/${id}?append_to_response=videos,credits&api_key=${API_KEY}`
    })
  })
});

export const { useGetMoviesQuery, useGetMovieQuery } = tmdbApi;

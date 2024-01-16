import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_KEY, TMDB_API_BASE_URL } from "@/utils/config";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: TMDB_API_BASE_URL }),

  endpoints: builder => ({
    getMovies: builder.query({
      query: ({
        type,
        search,
        page,
        id
      }: {
        type?: string;
        page?: number;
        search?: string;
        id?: number;
      }) => {
        if (search) {
          return `search/movie?api_key=${API_KEY}&query=${search}&page=${page}`;
        }

        return `movie/popular?api_key=${API_KEY}&page=${page}`;
      }
    }),

    getMovie: builder.query({
      query: ({ category, id }: { category: string; id: number }) =>
        `movie/${id}?append_to_response=videos,credits&api_key=${API_KEY}`
    })
  })
});

export const { useGetMoviesQuery, useGetMovieQuery } = tmdbApi;

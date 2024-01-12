import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { TMDB_API_BASE_URL } from "@/utils/config";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: TMDB_API_BASE_URL }),

  endpoints: builder => ({
    getShows: builder.query({
      query: () => {
        return `API`;
      }
    }),

    getShow: builder.query({
      query: ({ category, id }: { category: string; id: number }) => `API`
    })
  })
});

export const { useGetShowsQuery, useGetShowQuery } = tmdbApi;

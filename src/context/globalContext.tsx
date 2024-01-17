import React, { useContext, useState } from "react";
import { API_KEY, TMDB_API_BASE_URL } from "@/utils/config";
import { IMovie } from "@/types";
const fakeMovies = [
  {
    adult: false,
    backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
    genre_ids: [],
    id: 753342,
    original_language: "en",
    original_title: "Napoleon",
    overview:
      "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
    popularity: 2367.318,
    poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
    release_date: "2023-11-22",
    title: "Napoleon",
    video: false,
    vote_average: 6.5,
    vote_count: 1193
  },
  {
    adult: false,
    backdrop_path: "/dvNrgldueQciabkYmlCnyhmaPoO.jpg",
    genre_ids: [],
    id: 899445,
    original_language: "en",
    original_title: "Deep Fear",
    overview:
      "A solo trip aboard a yacht takes a terrifying turn when a woman encounters three drug traffickers clinging to the shattered remains of a boat. They soon force her to dive into shark-infested waters to retrieve kilos of cocaine from the sunken wreck.",
    popularity: 1143.446,
    poster_path: "/ruujFw7J0Nd3BSjbN3QODym82Qs.jpg",
    release_date: "2023-10-18",
    title: "Deep Fear",
    video: false,
    vote_average: 4.9,
    vote_count: 48
  }
];

const context = React.createContext({
  videoId: "",
  setVideoId: (prevValue: string) => {},
  getTrailerId: (id: number | string) => {},
  toggleModal: () => {},
  isVideoModalOpen: false,
  showSidebar: false,
  setShowSidebar: (prevValue: boolean) => {},
  favoriteMovies: [] as IMovie[],
  setFavoriteMovies: (prevValue: IMovie[]) => {}
});

interface Props {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [isVideoModalOpen, setIsVideoVideoModalOpen] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState<any>(fakeMovies);

  const toggleModal = () => {
    setIsVideoVideoModalOpen(prev => !prev);
  };

  const getTrailerId = async (id: number | string) => {
    try {
      const res = await fetch(
        `${TMDB_API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setVideoId(data.results[0].key);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <context.Provider
      value={{
        getTrailerId,
        videoId,
        toggleModal,
        isVideoModalOpen,
        setVideoId,
        showSidebar,
        setShowSidebar,
        favoriteMovies,
        setFavoriteMovies
      }}
    >
      {children}
    </context.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => {
  return useContext(context);
};

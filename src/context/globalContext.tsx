import React, { useContext, useState } from "react";
import { API_KEY, TMDB_API_BASE_URL } from "@/utils/config";
import { IMovie } from "@/types";

const context = React.createContext({
  videoId: "",
  setVideoId: (prevValue: string) => {},
  getTrailerId: (id: number | string) => {},
  toggleModal: () => {},
  isVideoModalOpen: false,
  showSidebar: false,
  setShowSidebar: (prevValue: boolean) => {},
  favoriteMovies: [] as IMovie[],
  setFavoriteMovies: (prevValue: IMovie[]) => {},
  addFavoriteMovie: (movie: IMovie) => {},
  removeFavoriteMovie: (id: number) => {}
});

interface Props {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [isVideoModalOpen, setIsVideoVideoModalOpen] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);

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
  const addFavoriteMovie = (movie: IMovie) => {
    setFavoriteMovies([...favoriteMovies, movie]);
  };
  const removeFavoriteMovie = (id: number) => {
    let moves = favoriteMovies?.filter(move => Number(move.id) !== id);
    setFavoriteMovies(moves);
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
        setFavoriteMovies,
        addFavoriteMovie,
        removeFavoriteMovie
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

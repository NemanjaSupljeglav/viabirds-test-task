import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  removeFavoriteMovie: (id: number) => {},
  user: "",
  createUser: (movie: string) => {}
});

interface Props {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string>("");
  const [isVideoModalOpen, setIsVideoVideoModalOpen] = useState<boolean>(false);
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);
  const [user, setUser] = useState<string>("");

  const navigate = useNavigate();

  const toggleModal = () => {
    setIsVideoVideoModalOpen(prev => !prev);
  };

  //Trailer
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

  //Favorite
  const addFavoriteMovie = (movie: IMovie) => {
    setFavoriteMovies([...favoriteMovies, movie]);
  };
  const removeFavoriteMovie = (id: number) => {
    let moves = favoriteMovies?.filter(move => Number(move.id) !== id);
    setFavoriteMovies(moves);
  };

  //Create User
  const createUser = (user: string) => {
    if (user) {
      setUser(user);
      toast.success(`Welcome ${user}! Choose your favorite movies.`);
      navigate("/");
    } else {
      toast.error("Please enter Your name.");
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
        setFavoriteMovies,
        addFavoriteMovie,
        removeFavoriteMovie,
        user,
        createUser
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

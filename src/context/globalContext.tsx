import React, { useContext, useState } from "react";
import { API_KEY, TMDB_API_BASE_URL } from "@/utils/config";

const context = React.createContext({
  videoId: "",
  setVideoId: (prevValue: string) => {},
  getTrailerId: (id: number | string) => {},
  toggleModal: () => {},
  isModalOpen: false,
  showSidebar: false,
  setShowSidebar: (prevValue: boolean) => {}
});

interface Props {
  children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const getTrailerId = async (id: number | string) => {
    try {
      console.log("getTrailerId");
      const res = await fetch(
        `${TMDB_API_BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      console.log("getTrailerId id je", data);

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
        isModalOpen,
        setVideoId,
        showSidebar,
        setShowSidebar
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

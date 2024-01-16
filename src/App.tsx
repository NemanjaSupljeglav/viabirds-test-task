import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Header, Footer, SideBar } from "@/common";

import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";

const Movies = lazy(() => import("./pages/Movies"));
const Details = lazy(() => import("./pages/Details"));
const Favorites = lazy(() => import("./pages/Favorites"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <>
      <SideBar />
      <Header />
      <main className="bg-black lg:pb-14 md:pb-4 sm:pb-2 xs:pb-1 pb-0">
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/details:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;

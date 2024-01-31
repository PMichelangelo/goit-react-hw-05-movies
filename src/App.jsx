import { Routes, Route } from "react-router-dom";

import MainMenu from "components/MainMenu/MainMenu";
import HomePage from "pages/HomePage/HomePage";
import MoviesPage from "pages/MoviesPage/MoviesPage";
import SingleMoviePage from "pages/SingleMoviePage/SingleMoviePage";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<SingleMoviePage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>


  );
};

export default App;

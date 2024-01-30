import { Routes, Route } from "react-router-dom";

import MainMenu from "components/MainMenu/MainMenu";
import HomePage from "pages/HomePage/HomePage";
import Movies from "pages/Movies/Movies";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/" element={<NotFoundPage />} />
      </Routes>
    </>


  );
};

export default App;

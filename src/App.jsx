import { Routes, Route } from "react-router-dom";

import MainMenu from "components/MainMenu";
import HomePage from "pages/HomePage/HomePage";
import Movies from "pages/Movies/Movies";

const App = () => {
  return (
    <>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<Movies/>} />
      </Routes>
    </>


  );
};

export default App;

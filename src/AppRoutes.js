import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("pages/HomePage/HomePage"))
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"))
const SingleMoviePage = lazy(() => import("pages/SingleMoviePage/SingleMoviePage"))
const CastPage = lazy(() => import("pages/CastPage/CastPage"))
const ReviewsPage = lazy(() => import("pages/ReviewsPage/ReviewsPage"))
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"))


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<HomePage/>}/>
          <Route path="movies/" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<SingleMoviePage />}>
            <Route path="credits" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage/>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes

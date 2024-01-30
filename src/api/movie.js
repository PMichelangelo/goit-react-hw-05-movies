import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

const API_KEY = 'c1b8188455d3821cba1ec79084ee17ed'
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWI4MTg4NDU1ZDM4MjFjYmExZWM3OTA4NGVlMTdlZCIsInN1YiI6IjY1YjdmMDZjNWUxNGU1MDE2MmFlMWU1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IW781AOuYF1mEWb5Irhk_GdBt6plLw7t1_rJUMKx5l0';

export const getTrendingMovies = () => {
  return instance.get('/trending/movie/day', {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  })
}

export const getMovieById = (id) => {
  return instance.get(`/trending/movie/day/${id}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  })
}

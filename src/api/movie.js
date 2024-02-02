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

export const getMovieByQuery = (query) => {
  const options = {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`
    },
    params: {
      query: query
    }
  }
  return instance.get('/search/movie', options)
}


export const getMovieById = (movie_id) => {
  return instance.get(`/movie/${movie_id}`, {
    params: {
      api_key: API_KEY,
    }
  } ,{
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  })
}

export const getCastById = movie_id => {
  return instance.get(`/movie/${movie_id}/credits`, {
    params: {
      api_key: API_KEY,
    }
  } ,{
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  })
}

export const getReviewsById = movie_id => {
  return instance.get(`/movie/${movie_id}/reviews`, {
    params: {
      api_key: API_KEY,
    }
  } ,{
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  })
}

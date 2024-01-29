import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/11?api_key=c1b8188455d3821cba1ec79084ee17ed'
})

export const getAllMovies = () => {
  return instance.get('/')
}

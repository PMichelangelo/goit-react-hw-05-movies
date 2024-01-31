import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from 'api/movie'

//import styles from './singleMovie.module.css'

const SingleMovie = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { movie_id } = useParams()

  useEffect(() => {
    const fetchSingleMovie = async () => {
        try {
          setLoading(true)
          const response = await getMovieById(movie_id);
          setMovie(response.data);
        } catch (error) {
        setError(error.message)
      }
        finally {
          setLoading(false)
        }
      }
      fetchSingleMovie()
  }, [movie_id])
  return (
    <div>
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}
      {movie && (
        <>
          <h2>{movie.title}</h2>
        </>
      )}
    </div>
)
}

export default SingleMovie

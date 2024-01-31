import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById} from 'api/movie'

import styles from './singleMovie.module.css'

const SingleMovie = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { movieId } = useParams()

  const params = useParams()
  console.log(params)

  useEffect(() => {
    const fetchSingleMovie = async () => {
        try {
          setLoading(true)
          const movieResponse = await getMovieById(movieId);
          setMovie(movieResponse.data);
          console.log('movieResponse:', movieResponse.data);

        } catch (error) {
        setError(error.message)
      }
        finally {
          setLoading(false)
        }
      }
      fetchSingleMovie()
  }, [movieId])

  const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

  return (
    <div>
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}
      {movie && (
        <><div>
          <h2>{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
          <p>User score: {(movie.vote_average * 10).toFixed(0)}%</p>
           {movie.backdrop_path ? (
            <img className={styles.poster}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt='poster'/>) : (<img src={defaultImg} alt="poster" />)}
          <h3>Overwie</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <h5>Additional information</h5>
          <ul>
            <li>Cast</li>
            <li>Reviews</li>
          </ul>
        </div>

        </>
      )}
    </div>
)
}

export default SingleMovie

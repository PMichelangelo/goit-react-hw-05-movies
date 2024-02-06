import { useState, useEffect, Suspense } from 'react'
import { useParams, useNavigate, useLocation, Link, Outlet } from 'react-router-dom'
import { getMovieById } from 'api/movie'

import styles from './singleMovie.module.css'

const SingleMovie = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { movieId } = useParams()
  const navigate = useNavigate()

  const location = useLocation()
  const from = location.state?.from || "/"

  useEffect(() => {
    const fetchSingleMovie = async () => {
        try {
          setLoading(true)
          const movieResponse = await getMovieById(movieId);
          setMovie(movieResponse.data);
        } catch (error) {
        setError(error.message)
      }
        finally {
          setLoading(false)
        }
      }
      fetchSingleMovie()
  }, [movieId])

  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

  const goBack = () => navigate(from)

  return (
    <div
    className={styles.movieWrapper}>
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}
      <button onClick={goBack} type='button' className={styles.goBackBtn}>← Go back</button>
      {movie && (
        <>
        <div className={styles.movieInfo}>
           {movie.backdrop_path ? (
            <img className={styles.poster}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}
            `}
                alt='poster' />) : (<img src={defaultImg} alt="poster" />)}
        <div>
          <h2>{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
          <p>User score: {(movie.vote_average * 10).toFixed(0)}%</p>
          <h3>Overwie</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul className={styles.genresList}>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
        <div className={styles.additionalInfo}>
            <h5>Additional information</h5>
          <ul className={styles.additionalInfoList}>
            <li className={styles.additionalInfoItem}>
              <Link to="credits" state={{ from }}>Cast</Link>
            </li>
            <li className={styles.additionalInfoItem}>
              <Link to="reviews" state={{ from }}>Reviews</Link>
              </li>
              <Suspense>
                <Outlet/>
              </Suspense>
          </ul>
        </div>
      </>
      )}
    </div>
)
}

export default SingleMovie

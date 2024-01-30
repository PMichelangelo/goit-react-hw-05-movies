import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from 'api/movie'

import styles from './singleMovie.module.css'

const SingleMovie = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const { id } = useParams()

  useEffect(() => {
    const fetchSingleMovie = async () => {
        try {
          setLoading(true)
          const {data} = await getMovieById(id)
          setMovie(data.results)
        } catch (error) {
          setError(error.message)
        }
        finally {
          setLoading(false)
        }
      }
      fetchSingleMovie()
  }, [])
  return (
    <div>
      {loading && <p>...loading</p>}
      {movie && (
        <>
          <h2>{movie.title}</h2>
        </>
      )}
    </div>
)
}

export default SingleMovie

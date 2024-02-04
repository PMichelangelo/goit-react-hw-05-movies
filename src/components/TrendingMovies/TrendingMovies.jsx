import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getTrendingMovies } from "api/movie";

import styles from './trendingMovies.module.css'


const TrendingMovies = () => {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true)
        const { data } = await getTrendingMovies();
        setMovies(data.results?.length ? data.results : [])
      } catch (error) {
        setError(error.message)
      }
      finally {
        setLoading(false)
      }

    }
    fetchTrendingMovies();
  }, [])

  const elements = movies.map(({ id, title }) =>
    (<li key={id} className={styles.listItem}>
    <Link to={`/movies/${id}`} state={{from: '/'}}>{title}</Link>
    </li>))

  return (
      <div className={styles.trendingWrapper}>
        <h3>Trending today</h3>
        {error && <p className={styles.error}>{error}</p>}
        {loading && <p>...Loading</p>}
        {Boolean(elements.length) && (<ol className={styles.list}>
          {elements}
        </ol>)}
      </div>
  )

}

export default TrendingMovies

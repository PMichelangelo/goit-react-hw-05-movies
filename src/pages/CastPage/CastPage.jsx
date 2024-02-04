import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "api/movie";

import styles from "./cast.module.css"

const CastPage = () => {
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { movieId } = useParams()

  useEffect(() => {
    const fetchCast = async () => {
        try {
          setLoading(true)
          const castResponse = await getCastById(movieId);
          setCast(castResponse.data.cast.slice(0, 5));

        } catch (error) {
        setError(error.message)
      }
        finally {
          setLoading(false)
        }
      }
      fetchCast()
  }, [movieId])

  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

  const elements = cast.map(({ id, original_name,profile_path }) => (
    <li key={id} className={styles.listItem}>
      <img src={profile_path ? `https://image.tmdb.org/t/p/original${profile_path}` : defaultImg}
        alt={'poster'} className={styles.actor} />
      <p className={styles.actorName}>{original_name}</p></li>
  ))

  const isCast = Boolean(cast.length)

  return (
    <>
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}
      {isCast && <ul className={styles.list}>{elements}</ul>}
    </>
  )
}

export default CastPage;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "api/movie";

import styles from "./review.module.css"

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { movieId } = useParams()

  useEffect(() => {
    const fetchReviews = async () => {
        try {
          setLoading(true)
          const reviewsResponse = await getReviewsById(movieId);
          setReviews(reviewsResponse.data.results);

        } catch (error) {
        setError(error.message)
      }
        finally {
          setLoading(false)
        }
      }
      fetchReviews()
  }, [movieId])


  const elements = reviews.map(({ id, author,content }) => (
    <li key={id} className={styles.listItem}>
      <h5 className={styles.author}>{author}</h5>
      <p className={styles.content}>{content}</p>
    </li>
  ))

  const isReviews = Boolean(reviews.length)

  return (
    <>
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}
      {!loading && !isReviews && <p>No reviews available</p>}
      {isReviews && <ul className={styles.list}>{elements}</ul>}
    </>
  )
}

export default ReviewsPage;

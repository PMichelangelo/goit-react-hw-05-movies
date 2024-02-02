import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "api/movie";

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
          console.log('reviewsResponse:', reviewsResponse.data.results);

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
    <li key={id}>
      <h5>{author}</h5>
      <p>{content}</p>
    </li>
  ))

  const isReviews = Boolean(reviews.length)

  return (
    <>
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}
      {isReviews && <ul>{elements}</ul>}
    </>
  )
}

export default ReviewsPage;

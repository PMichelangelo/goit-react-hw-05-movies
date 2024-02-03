import { useState, useEffect, useRef } from "react"
import { Link, useSearchParams , useLocation } from "react-router-dom"

export default function SearchMovie() {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { searchParams, setSearchParams } = useSearchParams()
  const [value, setValue] = useState(searchParams.get("query") ?? '')
  const location = useLocation()
  const query = searchParams.get('query') ?? '';

  const onFormSubmit = e => {
    e.preventDefault()
    if (value === '') {
      return alert('Sorry, but we cant find epty query')
    }
    setSearchParams({query: value})
  }

  useEffect(() => {
    if (!query) {
      return
    }
    fetchSearchMovie(query)
      .then(info => {
        if (!info.total_results) {
        return alert(`Sorry we donr found ${query}`)
        }
        setFilms(info.results)
      })
    .catch(error => console.log(error))
  }, [query])

  const handleInputChange = e => {
    setValue(e.target.value)
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {films.map(({ original_title, id }) => (
          <li>
            <Link to={`movies/${id}`}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

import { useState, useEffect, useRef } from "react"
import { Link, useSearchParams, useLocation } from "react-router-dom"

import { getMovieByQuery } from "api/movie"
import SearchForm from "components/SearchForm/SearchForm"
/*
const SearchMovie = () => {

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search");
  //const page = searchParams.get("page");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const queryResponse = await getMovieByQuery(search);
        setMovie(queryResponse.data);
        console.log('queryResponse:', queryResponse.data);
      }
      catch (error) {
        setError(error.message);
      }
      finally {
        setLoading(false);
      }
    }

    if (search) {
      fetchMovies();
    }
  }, [search])

  const handleSearch = ({ search }) => {
    // setSearch(search);
    setSearchParams({query: search });
    // setPage(1);
    setMovie([]);
  }

    const isMovie = Boolean(movie.length);

    const elements = movie.results && movie.results.map(({ id, title }) =>
    (<li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>))

    return (
      <>
        <SearchForm onSubmit={handleSearch} />
        {error && <p>{error}</p>}
        {loading && <p>...Loading</p>}
        {isMovie && <ol>{elements}</ol>}
      </>
    )
  }


export default SearchMovie*/

const SearchMovie = () => {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { searchParams, setSearchParams } = useSearchParams()
  const [value, setValue] = useState(searchParams.get("query") ||'')
  //const [search, setSearch] = useState(routeQuery || "");
  const prevSearchRef = useRef('');
  const query = searchParams.get('query') || '';

  const onFormSubmit = e => {
    e.preventDefault()
    if (value === '') {
      return alert ('We cant find anything by empty query')
    }
    setSearchParams({query: value})
  }

console.log(setSearchParams)
  useEffect(() => {
    const fetchMovieByQuery = async (query) => {
      try {
        setLoading(true)
        const queryResponse = await getMovieByQuery(query);
        if(queryResponse.data.results && queryResponse.data.results.length > 0) {
          setMovie(queryResponse.data);
          console.log('queryResponse:', queryResponse.data);
        } else {
          alert('Your query is invalid');
        }
      } catch (error) {
        setError(error.message)
      }
      finally {
        setLoading(false)
      }
    }
    if (!query) {
      return
    }
    fetchMovieByQuery()
      prevSearchRef.current = query;

  }, [query])


  //const handleSearch = (searchValue) => {
   // console.log("Submited search:", searchValue)
    //setSearch(searchValue.trim())
    //setSearchParams({query: routeQuery})
   // console.log("Submited search:", searchValue)
  //}

  const elements = movie.results && movie.results.map(({ id, title }) =>
    (<li key={id}>
    <Link to={`/movies/${id}`} state={{from: '/movies'}}>{title}</Link>
    </li>))

  return (
    <div>
      <SearchForm onSubmit ={onFormSubmit} />
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}
      {movie && movie.results && movie.results.length > 0 && (
        <div>
          <ol>{elements}</ol>
        </div>
      )}
    </div>
  )
}
export default SearchMovie



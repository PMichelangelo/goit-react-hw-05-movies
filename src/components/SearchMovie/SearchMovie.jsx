import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation} from "react-router-dom";
import { getMovieByQuery } from "api/movie";

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);
const [searchParams, setSearchParams] = useSearchParams()
const [value, setValue] = useState(searchParams.get("query") || "");
  const location = useLocation()

  const fetchMoviesByQuery = async (query) => {
    try {
      setLoading(true);
      const response = await getMovieByQuery(query);
      setMovies(response.data.results);
    } catch (error) {
      //setError(error.message);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const query = searchParams.get("query");

    if (query) {
      fetchMoviesByQuery(query);
    }
  }, [searchParams]);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!value) {
      return alert("Sorry, but we can't find an empty query");
    }

    try {
      setLoading(true);
      setSearchParams({ query: value });
      await getMovieByQuery(value)
      //const response = await getMovieByQuery(value);
      //setMovies(response.data.results);
      //setSearchParams({query: value})
    } catch (error) {
      //setError(error.message);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }

    searchParams.set("query :", value);

  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue( e.target.value )}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchMovie;
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

  /*useEffect(() => {
    const fetchMovieByQuery = async () => {
      if (query === prevSearchRef.current) {
      return;
    }
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
    fetchMovieByQuery(query)
      prevSearchRef.current = query;

  }, [query])*/


  //const handleSearch = (searchValue) => {
   // console.log("Submited search:", searchValue)
    //setSearch(searchValue.trim())
    //setSearchParams({query: routeQuery})
   // console.log("Submited search:", searchValue)
  //}

 /*  const elements = movie.results && movie.results.map(({ id, title }) =>
    (<li key={id}>
    <Link to={`/movies/${id}`} state={{from: '/movies'}}>{title}</Link>
    </li>))*/

  /*return (
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
}*/



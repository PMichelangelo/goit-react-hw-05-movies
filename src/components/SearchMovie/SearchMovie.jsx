import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation} from "react-router-dom";
import { getMovieByQuery } from "api/movie";

const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState(searchParams.get("query") || "");
  const location = useLocation()

  const fetchMoviesByQuery = async (query) => {
    try {
      setLoading(true);
      const response = await getMovieByQuery(query);
      setMovies(response.data.results);
    } catch (error) {
      setError(errorMsg.message);
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
  },[searchParams]);

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
      setError(errorMsg.message);
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

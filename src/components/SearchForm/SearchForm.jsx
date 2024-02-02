
import React, { useState, useRef, useEffect } from "react";

const SearchForm = ({ onSubmit  }) => {
  const [search, setSearch] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = e => {
    console.log(`Searchbar ${search}`);
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };


  return (
    <form onSubmit={handleSubmit} >
        <button type="submit" >
          <span >Search</span>
        </button>

        <input
          ref={inputRef}
          value={search}
          onChange={handleChange}
          name="search"
          type="text"
          required
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
  );
};

export default SearchForm;

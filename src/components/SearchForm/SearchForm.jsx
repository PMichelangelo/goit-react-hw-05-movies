import React, { useState, useRef, useEffect } from "react";

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={search}
        onChange={handleChange}
        type="text"
        required
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;

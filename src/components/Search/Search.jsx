import React, { useState } from "react";
import searchIcon from "../../assets/images/search-icon.svg";
import "./Search.css";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState(null);

  const handleClick = () => {
    onSearch(search);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
      setSearch("");
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for a city..."
        />
        <button
          onClick={handleClick}
          style={{
            backgroundImage: `url(${searchIcon})`,
          }}
        ></button>
      </div>
    </>
  );
};

export default Search;

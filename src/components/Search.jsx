import React, { useState } from "react";

const Search = ({onSearch}) => {
  const [search, setSearch] = useState(null);

  const handleClick = () => {
    onSearch(search);
  };

  return (
    <>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleClick}>Sök</button>
    </>
  );
};

export default Search;

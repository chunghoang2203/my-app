import React from "react";

function SearchIcon({ onClick}) {
  return (
    <div onClick={onClick}>
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default SearchIcon;

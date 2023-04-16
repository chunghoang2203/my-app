import React from "react";

function SearchIcon({ onClick}) {
  return (
    <div onClick={onClick}>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default SearchIcon;

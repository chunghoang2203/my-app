import React from "react";

function SearchBar() {

  return (
    <div>
      <div className="mobile-search">
        <div className="mobile-search--icon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="mobile-search--input">
          <input type="text" placeholder="Search movies" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

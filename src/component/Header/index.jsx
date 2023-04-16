import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "../../features/Header/SearchBar";
import SearchIcon from "../../features/Header/SearchIcon";
import SearchMobile from "../../features/Header";

function Header() {
  return (
    <div>
      <div className="header">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <div className="header__top">
          <div className="header__top-logo">
            <img
              src="https://yc.cldmlk.com/0007/1563328346551_Splash-Logo---1635-x-360-V2.png"
              alt="logo-website"
            />
          </div>
          <div className="header__top-search">
            <div className="search--icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="search--input">
              <input type="text" placeholder="Search movies" />
            </div>
          </div>


          <div className="header__top-btn ">
            <div className="icon-bookmark">
              <i class="fa-regular fa-bookmark"></i>
            </div>
            <button>Phim yêu thích</button>
          </div>
        </div>
        <div className="nav">
          <div className="mobile-icon-bars">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div className="mobile-icon-left">
            <div className="mobile-icon-search">
              <SearchMobile />
            </div>
            <div className="mobile-icon-bookmark">
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>

          <ul className="nav__list-category">
            <li>
              <Link to="/">
                {" "}
                <a href="/">phim mới</a>{" "}
              </Link>
            </li>
            <li>
              <Link to="/phim-le">
                {" "}
                <a href="/">phim lẻ</a>{" "}
              </Link>
            </li>
            <li>
              <Link to="/phim-bo">
                {" "}
                <a href="/">phim bộ</a>{" "}
              </Link>
            </li>
            <li>
              <Link to="/">
                {" "}
                <a href="/">thể loại</a>{" "}
              </Link>
            </li>
            <li>
              <Link to="/">
                {" "}
                <a href="/">quốc gia</a>{" "}
              </Link>
            </li>
            <li>
              <Link to="/new">
                {" "}
                <a href="/"> tin tức</a>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

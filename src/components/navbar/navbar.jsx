import "./navbar.scss";

import logo from "./../../assets/Images/logo.png";
import search from "./../../assets/icon/search.png";
import user from "./../../assets/icon/user.png";
import shopping from "./../../assets/icon/shopping.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav__items">
        <a href="/" className="nav__links">
          Track Order
        </a>
        <a href="/" className="nav__links">
          <img src={search} alt="search" />
        </a>
        <a href="/" className="nav__links">
          <img src={user} alt="user" />
        </a>
        <a href="/" className="nav__links">
          <img src={shopping} alt="shopping" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;

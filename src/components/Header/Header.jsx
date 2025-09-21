import {
  FaRegListAlt,
  FaRegStar,
  FaSearch,
  FaRegClock,
  FaRegBell,
} from "react-icons/fa";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import "./Header.css";
import { useDispatch } from "react-redux";
import { toggleNav, toggleNotifications } from "../../redux/slices/uiSlice";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header-container">
      <div className="header-left">
        <FaRegListAlt
          className="header-icon"
          onClick={() => dispatch(toggleNav())}
        />
        <FaRegStar className="header-icon" />
        <span className="nav-item">Dashboards</span>
        <span className="nav-item">/</span>
        <span className="nav-item active">Default</span>
      </div>

      <div className="header-center"></div>

      <div className="header-right">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
          <span className="search-shortcut">⌘/</span>
        </div>
        {theme === "light" ? (
          <IoSunnyOutline className="header-icon" onClick={toggleTheme} />
        ) : (
          <IoMoonOutline className="header-icon" onClick={toggleTheme} />
        )}
        <FaRegClock className="header-icon" />
        <FaRegBell className="header-icon" />
        <FaRegListAlt
          className="header-icon"
          onClick={() => dispatch(toggleNotifications())}
        />
      </div>
    </header>
  );
};

export default Header;

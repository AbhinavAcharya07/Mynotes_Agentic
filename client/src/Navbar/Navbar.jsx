import React from "react";
import { useContext } from "react";
import { ModeSwitcher } from "../contextProvider.jsx";
import "./Navbar.css";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { color, setColor } = useContext(ModeSwitcher);
  const toggleTheme = () => {
    setColor(color === "white" ? "black" : "white");
  };

  return (
    <div className={color === "white" ? "NavBar-Wte" : "NavBar-Blk"}>
      <div className="gridLeft">
        <p>MyNotes</p>
      </div>
      <div className="gridMiddle-Wte">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/createpost">CreatePost</Link>
          {/* <a>Notes</a> */}
        </ul>
      </div>
      <div className="gridRight">
        <input
          type="checkbox"
          id="DarkMoadeToggle"
          onClick={() => {
            toggleTheme();
          }}
        />
        <label htmlFor="DarkMoadeToggle">
          <img src={sun} alt="Theme toggle icon" className="iconSun" />
          <img src={moon} alt="Theme toggle icon" className="iconMoon" />
        </label>
      </div>
    </div>
  );
};

export default Navbar;

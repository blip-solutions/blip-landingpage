import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/blip_logo.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="blip__navbar">
      <div className="blip__navbar-links">
        <div className="blip__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="blip__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is Blip solutions?</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
      <div className="blip__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="blip__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="blip__navbar-menu_container scale-up-center">
            <div className="blip__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is Blip Solutions</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
              <p>
                <a href="#possibility">Contact</a>
              </p>
            </div>
            <div className="blip__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

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
            <a href="/#home">Product</a>
          </p>
       
        
          <p>
            <a href="/contact">Contact</a>
          </p>
        </div>
      </div>
      {/* <div className="blip__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="blip__navbar-menu">
        {toggleMenu ? (
         <></>
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="blip__navbar-menu_container ">
            <div className="blip__navbar-menu_container-links">
            <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
              <p>
                <a href="/#home">Product</a>
              </p>
            
              <p>
                <a href="/contact">Contact</a>
              </p>
            </div>
            {/* <div className="blip__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

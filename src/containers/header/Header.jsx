import React from "react";

import blip from "../../assets/labelatorio_sidepicture.png";
import "./header.css";

const Header = () => {
  return (
    <div className="blip__header section__padding" id="home">
      <div className="blip__header-content">
        <h1 className="gradient__text">
          We help You automate processes by text analysis
        </h1>
        <p>Teach your system to do repetitove tasks automaticaly.</p>
        <button type="button">View more</button>
      </div>

      <div className="blip__header-image">
        <img src={blip} />
      </div>
    </div>
  );
};

export default Header;

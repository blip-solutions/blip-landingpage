import React from "react";

import blip from "../../assets/labelatorio_sidepicture.png";
import labelatorioLogo from "../../assets/labelatorio_logo.png";
import "./header.css";



const MainHeader = () => {
  return (
    <div className="blip__header section__padding" id="home">
      <div className="blip__header-content">
        <h1 className="gradient__text">
        We automate processes with text analysis
        </h1>

        <p>Training <span className="underline">your own ML model</span> has never been this easy.</p><p>
        Don’t wait until you have "enough" data to train a perfect model. </p><p>Automate with <span className="underline">AI now</span> and review just the edge cases - with a direct update link to your APP.
      </p>
        
        <div style={{margin:"40px 0px"}}>
        <img  src={labelatorioLogo} /> 
        </div>
        
        <a href="https://www.labelator.io">
          <button type="button">Learn more</button>
        </a>
      </div>

      <div className="blip__header-image" >
       
         <img  src={blip} /> 
      </div>
    </div>
  );
};

export default MainHeader;

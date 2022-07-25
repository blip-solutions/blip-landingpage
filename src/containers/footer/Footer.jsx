import React from "react";
import blipLogo from "../../assets/blip_logo.png";
import "./footer.css";

const Footer = () => (
  <div className="blip__footer">
    <div className="blip__footer_logo">
      <img src={blipLogo} alt="blip_logo" />
    </div>

    <div className="blip__footer-copyright">
      <p>@2022 Blip Solutions. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

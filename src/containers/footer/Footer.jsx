import React from "react";
import blipLogo from "../../assets/blip_logo.png";
import "./footer.css";
import { MdOutlineAlternateEmail } from "react-icons/md"
import { FaSlack, FaTwitter } from "react-icons/fa"
import { BiCopy } from "react-icons/bi"
import { Box } from "grommet";

const Footer = () => {
  const [showMail, setShowMail] = React.useState(false);
  const mail = ["juraj", ".", "bezdek", "@", "blip", ".solutions"];
  const socialIconSize = "35px"
  const [copiedState, setCopiedState] = React.useState(false);
  return (
    <div className="blip__footer">


      <Box gap="medium" direction="row" justify="between" fill>

        <Box  >
          <Box gap="medium" direction="row">
            <Box focusIndicator={false} onClick={() => setShowMail(!showMail)} ><MdOutlineAlternateEmail size={socialIconSize} /></Box>
            {/* <Box focusIndicator={false} onClick={() =>  window.open("https://www.youtube.com/channel/UCP4FcfafNtxTOfIUmt2SZFg", '_blank')!.focus() } ><FaYoutube size={socialIconSize} /></Box>
                <Box focusIndicator={false} onClick={() => window.open("https://www.facebook.com/commentie/", '_blank')!.focus() } ><FaFacebook size={socialIconSize} /></Box>*/}
            <Box focusIndicator={false} onClick={() => window.open("https://join.slack.com/t/labelatorio/shared_invite/zt-1bpd3ck78-TbMtoZSGjjaznRamX6DnoQ", '_blank').focus()} ><FaSlack size={socialIconSize} /></Box>
            <Box focusIndicator={false} onClick={() => window.open("https://twitter.com/labelator_io", '_blank').focus()} ><FaTwitter size={socialIconSize} /></Box>
          </Box>
        {showMail && (<div direction="row" >
          <Box direction="row" gap="3px" background={copiedState ? "rgb(220,220,220)" : "rgb(200,200,200)"} pad="5px 8px" margin="10px" round>
            <a href={["ma", "il", "to:", ...mail].join("")} style={{textDecoration:"underline"}}>{mail.join("")} </a>
            <Box focusIndicator={false} onClick={() => {
              navigator.clipboard.writeText(mail.join("")).then(function () {
                setCopiedState(true);
                setTimeout(() => setCopiedState(false), 100);
              }, function (err) {
                console.error('Async: Could not copy text: ', err);
              });
            }}>
              <BiCopy />
            </Box>
          </Box>
        </div>)}
        </Box>



          <Box align="end" justify="end">

        <div className="blip__footer_logo">
          <img src={blipLogo} alt="blip_logo" />
        </div>
        <div className="blip__footer-copyright">
          <p>@{(new Date()).getFullYear()} Blip.solutions - All rights reserved.</p>
        </div>
          </Box>
      </Box>
    </div>
  )
}

export default Footer;

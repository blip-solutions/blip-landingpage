import { Box } from "grommet";
import React from "react";
import { BiCopy } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
  const [showMail, setShowMail] = React.useState(false);
  const mail = ["juraj", ".", "bezdek", "@", "blip", ".solutions"];
  const socialIconSize = "35px"
  const [copiedState, setCopiedState] = React.useState(false);

  return <div className="contact-root">

  <Box className="box" round border background="smokewhite" align="start"  >
  <p>
    Blip solutions s.r.o.
  </p>
  <p>
    Hubéneho 42
  </p>
  <p>831 53</p>
  <p>
    Bratislava, Slovakia
  </p>

  <Box direction="row" align="center" pad="5px 20px"  round background="orange"  focusIndicator={false} onClick={() => setShowMail(!showMail)} ><MdOutlineAlternateEmail size="20" /> 
  {showMail ? ("Hide email"):(
"Show email"
        )}
  </Box>
  {showMail && (<div direction="row" >
          <Box flex={false} direction="row" gap="3px" background={!copiedState ? "rgb(250,250,250)" : "rgb(220,220,220)"} pad="0px 8px" margin="10px 0px" round >
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
  </div>;
};

export default Contact;

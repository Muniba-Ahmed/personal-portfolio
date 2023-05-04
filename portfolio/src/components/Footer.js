import React from "react";
import "../styles/Navbar.css";

import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

function Footer() {
  return (
    <div className="footer">
      <div>
        <GitHubIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <EmailIcon />
      </div>
      <p> &copy; 2023 Muniba Ahmed </p>
    </div>
  );
}

export default Footer;

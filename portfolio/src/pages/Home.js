import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
// import "../styles/Footer.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Muniba</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <GitHubIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol></ol>
      </div>
    </div>
  );
}

export default Home;

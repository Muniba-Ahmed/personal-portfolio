import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

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
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              JavaScript, React.js, Next.js, ChakraUI, MaterialUI, Styled
              Components, Redux, Hooks, Axios, Context API, Jest, Cypress, HTML,
              CSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Node.js, Express.js, Knex, SQLite3, GitHub, VS Code, Vercel,
              Heroku
            </span>
          </li>
          <li className="item">
            <h2>Additional Skills</h2>
            <span>
              Git CLI, Data Structures and Algorithms, Object Oriented
              Programming, Debugging, Troubleshooting
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

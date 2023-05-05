import React from "react";
import ProjectItem from "../components/ProjectItem";
import jobTracker2 from "../assets/jobTracker2.png";
import nasa from "../assets/nasa.png";
import toDoList from "../assets/toDoList.png";
import eCom2 from "../assets/eCom2.png";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name="Job Tracker" image={jobTracker2} />
        <ProjectItem name="Nasa Photo Of the Day" image={nasa} />
        <ProjectItem name="To-Do List" image={toDoList} />
        <ProjectItem name="eCommerece Website" image={eCom2} />
      </div>
    </div>
  );
}

export default Projects;

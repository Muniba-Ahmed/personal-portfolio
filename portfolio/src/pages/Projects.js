import React from "react";
import ProjectItem from "../components/ProjectItem";
import jobTracker from "../assets/jobTracker.png";
import nasa from "../assets/nasa.png";
import toDoList from "../assets/toDoList.png";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name="Job Tracker" image={jobTracker} />
        <ProjectItem name="Nasa Photo Of the Day" image={nasa} />
        <ProjectItem name="To-Do List" image={toDoList} />
      </div>
    </div>
  );
}

export default Projects;

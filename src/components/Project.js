import React from "react";
import './project.css';

const Project = (props) => (
  <div class="project">
    <div class="project-title">{props.project.title}</div>
    <div class="proj-desc">{props.project.description}</div>
    <div class="proj-links">
      <a href={props.project.deployed} target="_blank" rel="noreferrer">Deployed</a>
      <a href={props.project.github} target="_blank" rel="noreferrer">GitHub</a>
    </div>
    <div class="proj-scr">
      <img src={props.project.screenshot} alt={`Screenshot of ${props.project.title}`} />
    </div>
  </div>
);

export default Project;
import React from "react";

const Project = (props) => (
  <div>
    <h3>{props.project.title}</h3>
    <a href={props.project.deployed}>Deployed</a>
    <a href={props.project.github}>GitHub</a>
    <img src={props.project.screenshot} alt={`Screenshot of ${props.project.title}`} />
  </div>
);

export default Project;
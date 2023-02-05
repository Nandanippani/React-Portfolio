import React from "react";
import { Link } from "react-router-dom";
import Project from "./Project";
import './ProjectGallery.css';

function ProjectGallery({ projects }) {
  return (
    <div class="project-gallery">
      {projects.map(project => (
        
          <Project project={project} />
       
      ))}
    </div>
  );
}

export default ProjectGallery;

import React from "react";
import { Link } from "react-router-dom";
import Project from "./Project";

function ProjectGallery({ projects }) {
  return (
    <div>
      {projects.map(project => (
        <Link key={project.id} to={`/projects/${project.id}`}>
          <Project project={project} />
        </Link>
      ))}
    </div>
  );
}

export default ProjectGallery;

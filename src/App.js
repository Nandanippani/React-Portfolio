import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import ProjectGallery from "./components/ProjectGallery.js";
import Contact from "./components/Contact";
import Project from "./components/Project";

const projects = [
  {
    id: 1,
    title: "Project 1",
    deployed: "https://project1.com",
    github: "https://github.com/project1",
    screenshot: "project1.png"
  },
  {
    id: 2,
    title: "Project 2",
    deployed: "https://project2.com",
    github: "https://github.com/project2",
    screenshot: "project2.png"
  },
  // ...
];

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<ProjectGallery projects={projects} />} />
          <Route
            exact
            path="/projects/:id"
            render={props => {
              const project = projects.find(
                project => project.id === parseInt(props.match.params.id)
              );
              return <Project {...props} project={project} />;
            }}
          />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
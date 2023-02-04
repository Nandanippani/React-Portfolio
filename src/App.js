import React from 'react';
import Header from './components/header';
import Nav from './components/nav';
import projects from './projects.json';





function Project({ title, description, github }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={github}>View on Github</a>
    </div>
  );
}

function Content() {
  return (
    <div>
      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          github={project.github}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;

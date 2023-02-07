import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import ProjectGallery from "./components/ProjectGallery.js";
import Contact from "./components/Contact";
import projects from './projects.json';
import PDFViewer from "./components/PDFViewer";

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<ProjectGallery projects={projects} />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/resume" element={<PDFViewer filePath='./cv/resume.pdf' />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
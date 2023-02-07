import React from "react";
import { Link } from "react-router-dom";

const styles = {
  bg: {
    backgroundColor: '#555',
  },
  hc: {
    color: '#555',
  }
}


function Header() {
  return (


    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Portfolio</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li style={styles.hc} class="nav-item">
              <Link to="/" class="nav-link">Home</Link>
            </li>
            <li style={styles.hc} class="nav-item">
              <Link to="/projects" class="nav-link">Projects</Link>
            </li>
            <li style={styles.hc} class="nav-item">
              <Link to="/contact" class="nav-link">Contact</Link>
            </li>
            <li style={styles.hc} class="nav-item">
              <Link to="https://www.linkedin.com/in/nandak4090/" target="_blank" class="nav-link">LinkedIn</Link>
            </li>
            <li style={styles.hc} class="nav-item">
              <Link to="/resume" class="nav-link">Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
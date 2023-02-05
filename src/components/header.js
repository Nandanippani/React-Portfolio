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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">My App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul  class="navbar-nav">
            <li style={styles.hc}class="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li style={styles.hc} class="nav-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li style={styles.hc} class="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>




  );
}

export default Header;
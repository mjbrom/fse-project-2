import React from "react"; // ES6 js
import { Link } from "react-router-dom";
import history from "../history";

function Nav() {
  if (
    history.location.pathname === "/" ||
    history.location.pathname === "/register"
  ) {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navMainMenu"
          aria-controls="navMainMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navMainMenu" class="navbar-collapse collapse">
          <div class="navbar-nav ml-auto">
            <Link to="/" className="nav-item nav-link active">
              Login
            </Link>
            <Link to="/register" className="nav-item nav-link">
              Register
            </Link>
          </div>
        </div>
      </nav>
    );
  } else {
    console.log(history);
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navMainMenu"
          aria-controls="navMainMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navMainMenu" class="navbar-collapse collapse">
          <div class="navbar-nav ml-auto">
            <Link to="/homepage" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/About" className="nav-item nav-link">
              About
            </Link>
            <Link to="/Contact" className="nav-item nav-link">
              Contact
            </Link>

            <Link to="/Services" className="nav-item nav-link">
              Services
            </Link>

            <Link to="/Disaster" className="nav-item nav-link">
              Disaster Events
            </Link>
            <Link to="/" className="nav-item nav-link">
              Log Out
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;

import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          Fantasy Football
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={() => {props.mtv(true)}}>
              <a className="nav-link text-light active" aria-current="page" href="#">
                My Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light active" aria-current="page" href="#">
                Login/Register
              </a>
            </li>
            <li className="nav-item" onClick={() => {props.mtv(false)}}>
              <a className="nav-link text-light active" aria-current="page" href="#">
                Select your team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light active" aria-current="page" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

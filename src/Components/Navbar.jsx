import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bolder" href="#">
          <span id="clr-txt" style={{ color: "#E4BE60" }}>
            BUILD
          </span>
          CONEX
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#abt">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#srs">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#prtfl">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#cntct">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

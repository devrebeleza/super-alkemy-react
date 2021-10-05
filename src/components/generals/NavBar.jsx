import React from "react";

export const NavBar = ({ LogoutForm }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-dark bg-dark px-2">
      <div className="container-fluid">
        <p></p>
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
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-4 mb-2 mb-lg-0 d-flex">
            <li className="nav-item me-4">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/heroes">
                Heroes
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <button
              className="btn btn-outline-light"
              onClick={() => LogoutForm()}
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

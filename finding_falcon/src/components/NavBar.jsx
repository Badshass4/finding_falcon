import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-light" href="/">
          Finding Falcon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-light" href="/find">
                Find Now <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

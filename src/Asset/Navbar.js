import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light  px-5 py-1"
      style={{ backgroundColor: "#F58634" }}
    >
      <Link
        class="navbar-brand font-weight-bolder text-dark"
        style={{ fontSize: "30px" }}
        to="/"
      >
        <img src="ss58.png" className="img-fluid w-75" />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto text-white justify-content-center align-items-md-center">
          <Link class="nav-link mx-4 text-white font-weight-bold" to="/Donors">
            Courses
          </Link>
          <Link
            class="nav-link mx-4 text-white font-weight-bold"
            to="/Applications"
          >
            Contact US{" "}
          </Link>
          <Link
            to="/HelpSomeone"
            class="nav-link font-weight-bold mx-4 text-white"
          >
            Forum{" "}
          </Link>

          <Link to="/Login">
            {" "}
            <button
              class="button loginBtn btn-light font-weight-bold bg-light   mx-4"
              style={{ color: "#F58634" }}
              type="button"
            >
              Sign Up
            </button>
          </Link>

          {/* <h2>Pill Buttons</h2> */}

          {/* <button class="button">Pill Button 1</button> */}
          {/* <button class="button">Pill Button 2</button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

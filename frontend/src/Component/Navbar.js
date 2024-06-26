import React, { useState, useEffect, useRef } from "react";
import { animateScroll as scroll } from "react-scroll"; // Import Link and scroll from react-scroll
import "./Navbar.css";
import img from "../media/a.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navRef = useRef();

  const handleToggle = () => {
    setIsAnimating(true);
    setIsCollapsed(!isCollapsed);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsCollapsed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="div bg-dark text-light font-monospace text-center py-1">
      Wheelspectrapro@gmail.com
      </div>

      <nav className="navbar navbar-expand-lg d-none d-md-block bg-secondarys shadow">
        <div className="container">
          <Link className="navbar-brand font-monospace m-0" to="/">
            <img src={img} className="logo m-0" alt="Logo" />
          </Link>
          <div>
            <ul className="navbar-nav fs-5 text-uppercase">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link px-3 nav-hover  text-white active"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="#section2"
                  className="nav-link px-3 nav-hover  text-white"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#section4"
                  className="nav-link px-3 nav-hover  text-white"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#section5"
                  className="nav-link px-3 nav-hover  text-white"
                >
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#section6"
                  className="nav-link px-3 nav-hover  text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav
        ref={navRef}
        className="navbar navbar-expand-lg bg-secondarys d-md-none shadow"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={img} className="logo-m" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={isCollapsed ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isCollapsed ? "slide-down" : "slide-up"
            } ${isAnimating ? "animating" : ""}`}
            id="navbarNavAltMarkup"
          >
            <ul className="navbar-nav fs-5 text-center text-uppercase">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link px-2 nav-hover  text-white active"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="#section2"
                  className="nav-link px-2 nav-hover  text-white"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#section4"
                  className="nav-link px-2 nav-hover  text-white"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#section5"
                  className="nav-link px-2 nav-hover  text-white"
                >
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#section6"
                  className="nav-link px-2 nav-hover  text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

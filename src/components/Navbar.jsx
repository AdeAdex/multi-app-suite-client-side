import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDisclosure } from '@mantine/hooks';
import { Burger } from "@mantine/core";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-light ${
          isMenuOpen ? "show" : ""
        }`}
        style={{ position: "fixed", top: "0", left: "0", width: "100%" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="ade.png" alt="" style={{ width: "50px" }} />
          </a>
          <Burger opened={isMenuOpen} onClick={toggleMenu} aria-label="Toggle navigation" />
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Jokes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/quiz"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Quiz
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dictionary"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Dictionary
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/football-matches"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Football Matches
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
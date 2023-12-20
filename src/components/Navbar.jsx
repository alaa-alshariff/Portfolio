import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const scrollToTop = () => {
  // Scroll to top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const mobileNav = document.querySelector(".mobilenavigation");
    if (isOpen) {
      mobileNav.classList.add("slide-out");
      mobileNav.classList.remove("open");
    } else {
      mobileNav.classList.remove("slide-out");
      mobileNav.classList.add("open");
    }
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="desktop-navigation">
        <div className="navbarcontainer">
          <div className="navlogo">
            <a href="#top" onClick={scrollToTop}>
              Alaa &nbsp; <span> Alsharif</span>
            </a>
          </div>

          <ul className="navitems">
            {navLinks.map((link) => (
              <li>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className="git-btn">
            <a
              href="https://github.com/alaa-alshariff?tab=repositories"
              target="_blank"
            >
              Github Profile
            </a>
          </div>
        </div>
      </div>

      <div className="mobilenavigation">
        <div className="navlogo">
          <a href="#top" onClick={scrollToTop}>
            Alaa &nbsp; <span> Alsharif</span>
          </a>
        </div>
        <button
          className={`burger-menu ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"} {/* Toggle between open and close icons */}
        </button>

        {/* {isOpen && ( */}
        <div className={`mobile-navigation ${isOpen ? "open" : ""}`}>
          <nav>
            <ul className="mobile-items">
              {navLinks.map((link) => (
                <li>
                  <a onClick={closeMenu} href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

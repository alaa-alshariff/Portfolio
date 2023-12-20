import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const scrollToTop = () => {
  // Scroll to top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-wrapper">
        <div>
          <a href="#top" className="logo" onClick={scrollToTop}>
            Alaa &nbsp; <span>Alsharif</span>
          </a>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>
        <div className="socials">
          <a
            href="https://www.facebook.com/alaa.alsharif.77"
            className="icon"
            target="display"
          >
            <FaFacebook />
          </a>
          {/* <a href="#" className="icon" target="display">
            <FaTwitter />
          </a> */}
          <a
            href="https://www.linkedin.com/in/alaa-alsharif-589200139/"
            className="icon"
            target="display"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/alaa.alshariff/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
            className="icon"
            target="display"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="copyrights">
          &copy; 2023 Alaa Alsharif. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;

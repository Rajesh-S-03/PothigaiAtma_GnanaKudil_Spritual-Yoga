import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Yoga  (1).png";
import {
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaGlobe,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Google Translate function
    window.googleTranslateElementInit = () => {
      if (
        window.google &&
        window.google.translate &&
        document.getElementById("google_translate_element")
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ta,hi,te,ml",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // Load Google Translate script
    const script = document.createElement("script");

    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    script.async = true;

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* ================= BRAND ================= */}

      <div className="brand">

        <img
          src={logo}
          alt="Amirthalogam"
          className="brand-logo"
        />

        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          Amirthalogam
        </NavLink>

      </div>


      {/* ================= HAMBURGER ================= */}

      <div
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>


      {/* ================= NAVIGATION ================= */}

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>

        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/trainings" onClick={closeMenu}>
            Training Programs
          </NavLink>
        </li>

        <li>
          <NavLink to="/events" onClick={closeMenu}>
            Events
          </NavLink>
        </li>

        <li>
          <NavLink to="/activities" onClick={closeMenu}>
            Social Welfare Activities
          </NavLink>
        </li>

        <li>
          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>
        </li>


        {/* ================= MOBILE ================= */}

        <li className="mobile-extra">

          <div className="language-container">

            <FaGlobe className="language-icon" />

            <div
              id="google_translate_element"
              className="google-translate"
            ></div>

          </div>


          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp className="whatsapp-logo" />
          </a>

        </li>

      </ul>


      {/* ================= DESKTOP ================= */}

      <div className="desktop-icons">

        <div className="language-container">

          <FaGlobe className="language-icon" />

          <div
            id="google_translate_element"
            className="google-translate"
          ></div>

        </div>


        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <FaWhatsapp className="whatsapp-logo" />
        </a>

      </div>

    </nav>
  );
};

export default Navbar;
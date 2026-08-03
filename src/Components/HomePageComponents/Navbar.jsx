import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Yoga  (1).png";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="brand">
        <img
          src={logo}
          alt="Pothigai Atma Gnana Kudil"
          className="brand-logo"
        />

        <NavLink to="/" className="logo" onClick={closeMenu}>
          Pothigai Atma Gnana Kudil
        </NavLink>
      </div>

      {/* Hamburger */}
      <div
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation */}
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

        {/* Mobile Only */}
        <li className="mobile-extra">

          <div className="language-switch">
            <button className="lang-btn active">தமிழ்</button>
            <button className="lang-btn">English</button>
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

      
      <div className="desktop-icons">

        <div className="language-switch">
          <button className="lang-btn active">தமிழ்</button>
          <button className="lang-btn">English</button>
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
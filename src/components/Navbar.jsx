import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import axios from "axios";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visits, setVisits] = useState(0);

  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  // ✅ Cookie Functions
  const setCookie = (name, value, minutes) => {
    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  const getCookie = (name) => {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i].trim();
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return null;
  };

  // ✅ Counter API Call only if cookie not exists
  useEffect(() => {
    const updateCounter = async () => {
      try {
        // Check cookie first
        const savedCount = getCookie("visitorCount");

        if (savedCount) {
          console.log("Cookie Found, No API Call");
          setVisits(savedCount);
          return;
        }

        console.log("Cookie Not Found, Calling API...");

        // If cookie not available, call API
        const res = await axios.post(
          "https://backend-the-namratagreen-foundation.vercel.app/api/v1/counter"
        );

        const count = res.data["0"].visits;

        // Set state
        setVisits(count);

        // Store in cookie for 2 minutes
        setCookie("visitorCount", count, 2);

      } catch (error) {
        console.log("Counter API Error:", error);
      }
    };

    updateCounter();
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src={require("../assets/logo.jpg")}
            alt="Namrta Green Logo"
            style={{
              height: "80px",
              width: "80px",
              objectFit: "contain",
              marginRight: "10px",
            }}
          />
          <span style={{ fontSize: "1.2rem", lineHeight: "1.2" }}>
            The Namrta Green
            <br />
            Organization Inc
          </span>
        </Link>

        {/* ✅ Visits Show */}
        <div
          style={{
            color: "black",
            fontSize: "16px",
            fontWeight: "600",
            marginLeft: "20px",
          }}
        >
          Visits: {visits}
        </div>

        <div className="mobileToggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`navLinks ${isOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={`navLink ${isActive("/")}`}
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`navLink ${isActive("/about")}`}
            onClick={closeMenu}
          >
            About Us
          </Link>

          <div className="dropdown">
            <span
              className={`navLink ${isActive("/our-work")}`}
              style={{ cursor: "pointer" }}
            >
              Our Work ▾
            </span>

            <div className="dropdown-content">
              <Link to="/our-work" onClick={closeMenu}>
                All Projects
              </Link>
              <Link to="/our-work?location=India" onClick={closeMenu}>
                India
              </Link>
              <Link to="/our-work?location=USA" onClick={closeMenu}>
                USA
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            className={`navLink ${isActive("/contact")}`}
            onClick={closeMenu}
          >
            Contact Us
          </Link>

          <a
            href="https://buymeacoffee.com/namrtagreen"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Donate Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

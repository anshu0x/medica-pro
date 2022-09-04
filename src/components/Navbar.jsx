import { useEffect, useState } from "react";
import { FaMedrt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import "./Navbar.css";
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  useEffect(() => {
    if (isNavExpanded) {
      document.body.style.overflow = "hidden";
    } else if (!isNavExpanded) {
      document.body.style.overflow = "auto";
    }
  }, [isNavExpanded]);
  return (
    <nav className="navigation">
      <NavLink to="/" className="brand-name">
        <FaMedrt />
        <a> Medicee</a>
      </NavLink>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* hamburger svg code... */}
        <RiMenu2Line />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink exact activeClassName="active-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active-link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active-link" to="/faq">
              Faq
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

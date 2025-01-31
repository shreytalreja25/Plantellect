import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Home, Info, Mail } from "lucide-react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4 shadow fixed-top">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <Leaf className="me-2" /> Plantellect
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/"><Home className="me-1" size={18} /> Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about"><Info className="me-1" size={18} /> About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact"><Mail className="me-1" size={18} /> Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

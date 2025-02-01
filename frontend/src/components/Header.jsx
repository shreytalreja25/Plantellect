import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, Home, Info, Mail, Sun, Moon, LogIn, UserPlus, LogOut, LayoutDashboard } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Apply theme on mount and when darkMode changes
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [darkMode]);

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg px-4 shadow fixed-top bg-success text-white">
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
            <Link className="nav-link text-white" to="/"><Home className="me-1" size={18} /> Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about"><Info className="me-1" size={18} /> About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact"><Mail className="me-1" size={18} /> Contact</Link>
          </li>
        </ul>
        <div className="d-flex align-items-center ms-3">
          {user ? (
            <>
              <Link to="/dashboard" className="btn btn-outline-light me-2">
                <LayoutDashboard size={18} className="me-1" /> Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-outline-light me-3"
              >
                <LogOut size={18} className="me-1" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light me-2">
                <LogIn size={18} className="me-1" /> Login
              </Link>
              <Link to="/register" className="btn btn-outline-light me-3">
                <UserPlus size={18} className="me-1" /> Register
              </Link>
            </>
          )}
          <button
            className="btn btn-outline-light d-flex align-items-center"
            onClick={toggleTheme}
          >
            {darkMode ? <Sun size={20} className="me-1" /> : <Moon size={20} className="me-1" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer bg-success text-white py-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <h5 className="mb-3">Plantellect</h5>
            <p className="small mb-0">
              Making plant care smarter with AI technology.
            </p>
          </div>
          
          <div className="col-md-4 text-center">
            <div className="social-links mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <Github size={20} />
              </a>
            </div>
            <p className="small mb-0">
              Made with <Heart size={16} className="text-danger mx-1" fill="currentColor" /> by Team Plantellect
            </p>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <div className="footer-links mb-3">
              <Link to="/about" className="text-white mx-2">About</Link>
              <Link to="/contact" className="text-white mx-2">Contact</Link>
              <a href="#" className="text-white mx-2">Privacy Policy</a>
              <a href="#" className="text-white mx-2">Terms</a>
            </div>
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} Plantellect. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero bg-light text-center py-5">
      <div className="container">
        <h1 className="display-4 text-success fw-bold">Smart Gardening with AI</h1>
        <p className="lead text-muted">
          Optimize your plant care with AI-powered insights, automation, and real-time monitoring.
        </p>
        <Link to="/about" className="btn btn-success btn-lg mt-3">
          Learn More <ArrowRight className="ms-2" size={20} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

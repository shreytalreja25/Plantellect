import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero d-flex align-items-center">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 text-success fw-bold mb-4">Smart Gardening with AI</h1>
            <p className="lead mb-4">
              Optimize your plant care with AI-powered insights, automation, and real-time monitoring.
            </p>
            <Link to="/about" className="btn btn-success btn-lg">
              Learn More <ArrowRight className="ms-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

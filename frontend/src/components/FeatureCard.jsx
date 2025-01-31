import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card border-success shadow-sm h-100">
        <div className="card-body text-center">
          <span className="fs-1">{icon}</span>
          <h5 className="card-title mt-3">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

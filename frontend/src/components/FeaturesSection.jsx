import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  { icon: "🌱", title: "AI Plant Care", description: "Personalized AI-based plant care tips." },
  { icon: "💧", title: "Automated Irrigation", description: "Smart moisture-controlled watering." },
  { icon: "🐞", title: "Pest Detection", description: "Detect pests with AI-powered analysis." },
  { icon: "🌍", title: "Virtual Garden Tours", description: "Explore gardens in 3D virtually." },
  { icon: "🛒", title: "Marketplace", description: "Buy & sell gardening essentials." },
  { icon: "🌤️", title: "Weather Integration", description: "Get real-time weather updates." },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2 className="text-success fw-bold text-center mb-4">Key Features</h2>
        <p className="text-muted text-center mb-5">Explore how Plantellect makes gardening smarter.</p>
        <div className="row g-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

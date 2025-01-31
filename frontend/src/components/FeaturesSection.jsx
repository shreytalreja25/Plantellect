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
    <section id="features" className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="text-success fw-bold">Key Features</h2>
        <p className="text-muted">Explore how Plantellect makes gardening smarter.</p>
        <div className="row mt-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

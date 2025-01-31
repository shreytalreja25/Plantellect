import React from "react";
import { Phone, Check } from "lucide-react";

const AppShowcase = () => {
  const features = [
    "Real-time plant monitoring",
    "Smart notifications",
    "Plant identification",
    "Care scheduling",
    "Community support",
    "Expert advice"
  ];

  return (
    <section className="app-showcase">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="text-center text-lg-start">
              <h2 className="display-5 fw-bold text-success mb-4">
                Take Your Garden Anywhere
              </h2>
              <p className="lead mb-4">
                Download our mobile app to keep your garden thriving, even when you're on the go.
                Get instant plant care tips, reminders, and expert advice right at your fingertips.
              </p>
              <div className="features-list mb-4">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item mb-2">
                    <Check className="text-success me-2" size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="app-buttons">
                <button className="btn btn-success btn-lg me-3 mb-3">
                  <Phone className="me-2" size={20} />
                  Download for iOS
                </button>
                <button className="btn btn-success btn-lg mb-3">
                  <Phone className="me-2" size={20} />
                  Download for Android
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-mockup text-center">
              {/* Placeholder for app mockup image */}
              <div className="mockup-placeholder">
                <Phone size={240} className="text-success mb-3" />
                <p className="text-muted">App preview coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase; 
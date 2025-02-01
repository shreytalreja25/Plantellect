import React, { useState, useEffect } from "react";

const AIPersonalCareGuide = () => {
  const [careTips, setCareTips] = useState([]);
  const [loading, setLoading] = useState(true);

  // Example plant data
  const plants = [
    { name: "Aloe Vera", status: "Healthy", sunlight: "Moderate", watering: "Every 3 days" },
    { name: "Rose", status: "Needs Watering", sunlight: "Full Sun", watering: "Daily" },
    { name: "Basil", status: "Healthy", sunlight: "Partial Sun", watering: "Every 2 days" }
  ];

  useEffect(() => {
    generateCareTips();
  }, []);

  const generateCareTips = () => {
    setLoading(true);
    
    setTimeout(() => {
      const tips = plants.map((plant) => ({
        name: plant.name,
        tip: `Your ${plant.name} requires ${plant.watering} and prefers ${plant.sunlight} conditions. ${plant.status === "Needs Watering" ? "Water it today!" : "Keep maintaining its current routine."}`
      }));

      setCareTips(tips);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm mt-3">
      <h5 className="text-success fw-bold mb-3">🌿 AI Personal Care Guide</h5>
      
      {loading ? (
        <p>Loading personalized care tips...</p>
      ) : (
        <ul className="list-group">
          {careTips.map((tip, index) => (
            <li key={index} className="list-group-item">
              <strong>{tip.name}</strong>: {tip.tip}
            </li>
          ))}
        </ul>
      )}

      <button className="btn btn-success w-100 mt-3" onClick={generateCareTips}>
        Refresh Tips
      </button>
    </div>
  );
};

export default AIPersonalCareGuide;

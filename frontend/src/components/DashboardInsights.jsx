import React from "react";

const DashboardInsights = () => {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h5 className="text-success fw-bold mb-3">Weather & Insights</h5>
      <p><strong>🌡 Temperature:</strong> 25°C</p>
      <p><strong>💧 Soil Moisture:</strong> 40%</p>
      <p><strong>☀ Sunlight:</strong> 6 hours/day</p>
      <p><strong>📆 Next Watering:</strong> Tomorrow</p>
    </div>
  );
};

export default DashboardInsights;

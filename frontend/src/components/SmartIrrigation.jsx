import React from "react";

const SmartIrrigation = () => {
  const soilMoisture = 35; // Example moisture level

  return (
    <div className="bg-white p-4 rounded shadow-sm mt-3">
      <h5 className="text-info fw-bold mb-3">💧 Smart Irrigation</h5>
      <p>Soil Moisture: {soilMoisture}%</p>
      {soilMoisture < 40 ? (
        <button className="btn btn-danger w-100">Water Now</button>
      ) : (
        <p className="text-success">Optimal Moisture Level</p>
      )}
    </div>
  );
};

export default SmartIrrigation;

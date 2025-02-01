import React from "react";

const MyGarden = () => {
  const plants = [
    { name: "Aloe Vera", status: "Healthy" },
    { name: "Rose", status: "Needs Watering" },
    { name: "Basil", status: "Healthy" }
  ];

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h5 className="text-success fw-bold mb-3">🌱 My Garden</h5>
      <ul className="list-group">
        {plants.map((plant, index) => (
          <li key={index} className="list-group-item">
            {plant.name} - <strong>{plant.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyGarden;

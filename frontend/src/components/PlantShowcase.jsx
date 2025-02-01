import React from "react";

const PlantShowcase = () => {
  const plants = [
    { name: "Aloe Vera", status: "Healthy", lastWatered: "2 days ago", image: "https://m.media-amazon.com/images/I/61vM5XmrW2L._AC_UF1000,1000_QL80_.jpg" },
    { name: "Rose", status: "Needs Watering", lastWatered: "5 days ago", image: "https://m.media-amazon.com/images/I/61QLvIeEYQL.jpg" },
    { name: "Basil", status: "Healthy", lastWatered: "1 day ago", image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/stock%2FGettyImages-927893926" }
  ];

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h5 className="text-success fw-bold mb-3">🌱 My Garden</h5>
      <div className="row">
        {plants.map((plant, index) => (
          <div key={index} className="col-md-4">
            <div className="card border-success shadow-sm">
              <img src={plant.image} className="card-img-top" alt={plant.name} />
              <div className="card-body text-center">
                <h6 className="card-title fw-bold">{plant.name}</h6>
                <p className={`text-${plant.status === "Healthy" ? "success" : "danger"}`}>
                  {plant.status}
                </p>
                <small>Last watered: {plant.lastWatered}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantShowcase;

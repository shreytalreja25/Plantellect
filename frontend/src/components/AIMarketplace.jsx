import React from "react";

const AIMarketplace = () => {
  const recommendations = [
    { name: "Organic Fertilizer", price: "$12.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gUUbWlyL8AHSv8OK4sFCF-KtNdobvaQ_pQ&s" },
    { name: "Smart Watering System", price: "$59.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL88gCWHXlaZ10OJmc5hZQ9jE7jMVUeCQ47A&s" },
    { name: "Pesticide Spray", price: "$15.49", image: "https://m.media-amazon.com/images/I/81hqYEGSfhL.jpg" }
  ];

  return (
    <div className="bg-white p-4 rounded shadow-sm mt-3">
      <h5 className="text-warning fw-bold mb-3">🛒 AI Marketplace</h5>
      <div className="row">
        {recommendations.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card border-success shadow-sm">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body text-center">
                <h6 className="card-title fw-bold">{item.name}</h6>
                <p className="text-dark">{item.price}</p>
                <button className="btn btn-success w-100">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIMarketplace;

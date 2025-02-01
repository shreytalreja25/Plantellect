import React, { useState } from "react";

const AIDiseaseDetector = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const analyzePlant = async () => {
    if (!image) return alert("Please upload an image");

    setResult("Analyzing..."); // Placeholder
    setTimeout(() => setResult("Possible Disease: Powdery Mildew"), 2000);
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h5 className="text-danger fw-bold mb-3">🔬 AI Disease Detector</h5>
      <input type="file" onChange={handleImageUpload} className="form-control mb-2" />
      <button className="btn btn-success w-100" onClick={analyzePlant}>Analyze</button>
      {result && <p className="mt-3 text-center">{result}</p>}
    </div>
  );
};

export default AIDiseaseDetector;

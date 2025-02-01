import React from "react";
import { Home, Leaf, ClipboardList, Store, Camera, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <aside className="bg-success text-white p-4 h-100">
      <h3 className="fw-bold mb-4">Plantellect</h3>
      <ul className="list-unstyled">
        <li className="mb-3">
          <Link to="/dashboard" className="text-white text-decoration-none">
            <Home className="me-2" /> Dashboard
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/my-garden" className="text-white text-decoration-none">
            <Leaf className="me-2" /> My Garden
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/care-guide" className="text-white text-decoration-none">
            <ClipboardList className="me-2" /> Care Guide
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/marketplace" className="text-white text-decoration-none">
            <Store className="me-2" /> Marketplace
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/live-monitoring" className="text-white text-decoration-none">
            <Camera className="me-2" /> Live Monitoring
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/settings" className="text-white text-decoration-none">
            <Settings className="me-2" /> Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default DashboardSidebar;

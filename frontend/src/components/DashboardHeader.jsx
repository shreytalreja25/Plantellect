import React from "react";
import { Bell, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const DashboardHeader = () => {
  const { user } = useAuth();

  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light shadow-sm">
      <h4 className="fw-bold text-success">Dashboard</h4>
      <div className="d-flex align-items-center">
        <Bell className="me-3 text-success" size={22} />
        <div className="d-flex align-items-center">
          <User className="me-2 text-success" size={22} />
          <span>{user?.name || "User"}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

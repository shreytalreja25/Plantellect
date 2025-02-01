import React from "react";
import Layout from "../components/Layout";
import DashboardSidebar from "../components/DashboardSidebar";
import PlantShowcase from "../components/PlantShowcase";
import AIDiseaseDetector from "../components/AIDiseaseDetector";
import CommunityFeed from "../components/CommunityFeed";
import AIMarketplace from "../components/AIMarketplace";
import DashboardInsights from "../components/DashboardInsights";
import SmartIrrigation from "../components/SmartIrrigation";
import AIPersonalCareGuide from "../components/AIPersonalCareGuide";
import LiveMonitoring from "../components/LiveMonitoring";

const Dashboard = () => {
  return (
    <Layout>
      <div className="d-flex">
        {/* Sidebar (Left Navigation) */}
        <div className="d-none d-md-block" style={{ width: "250px" }}>
          <DashboardSidebar />
        </div>

        {/* Main Content (Expanded Center Panel) */}
        <div className="flex-grow-1 p-4">
          <div className="row">
            {/* Left Side - Main Features */}
            <div className="col-lg-8">
              <PlantShowcase />
              <AIDiseaseDetector />
              <CommunityFeed />
              <AIMarketplace /> {/* 🛒 Moved AI Marketplace to Center */}
            </div>

            {/* Right Side - Small Widgets */}
            <div className="col-lg-4">
              <DashboardInsights />
              <SmartIrrigation />
              <AIPersonalCareGuide />
              <LiveMonitoring />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

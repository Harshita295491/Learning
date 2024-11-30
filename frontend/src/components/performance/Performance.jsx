import React from "react";
import Header from "./components/Header";
import HRMSComp from "./components/HRMSComp";
import PMSComp from "./components/PMSComp";
import ReportSummary from "./components/ReportSummary";

function Performance() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header />
      {/* Top Section with HRMS and PMS */}
      <div className="flex space-x-4">
        <HRMSComp />
        <PMSComp />
      </div>

      {/* Report Summary Section */}
      <ReportSummary />
    </div>
  );
}

export default Performance;

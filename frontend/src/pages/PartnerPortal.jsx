import React from "react";
import DashboardStats from "./partner/components/DashboardStats";
import FileManager from "./partner/components/FileManager";
import CommissionTable from "./partner/components/CommissionTable";

export default function PartnerPortal() {
  return (
    <main className="container mx-auto px-6 space-y-12">
      <h1 className="text-3xl font-bold text-[#0369a1] text-center mt-10">
        Partner Portal
      </h1>
      <DashboardStats />
      <FileManager />
      <CommissionTable />
    </main>
  );
}

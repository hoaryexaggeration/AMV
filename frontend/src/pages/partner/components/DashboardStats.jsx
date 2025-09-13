import React from "react";

export default function DashboardStats() {
  return (
    <div className="grid md:grid-cols-3 gap-6 my-8">
      <div className="bg-white border rounded-lg shadow p-6 text-center">
        <h3 className="text-2xl font-bold text-[#0369a1]">KES 25,000</h3>
        <p className="text-slate-600">Total Commissions</p>
      </div>
      <div className="bg-white border rounded-lg shadow p-6 text-center">
        <h3 className="text-2xl font-bold text-[#0369a1]">15</h3>
        <p className="text-slate-600">Clients Referred</p>
      </div>
      <div className="bg-white border rounded-lg shadow p-6 text-center">
        <h3 className="text-2xl font-bold text-[#0369a1]">3</h3>
        <p className="text-slate-600">Pending Payouts</p>
      </div>
    </div>
  );
}

import React from "react";

export default function CommissionTable() {
  const rows = [
    { client: "John Doe", visa: "Tourist", status: "Approved", commission: "KES 2,000" },
    { client: "Jane Smith", visa: "Student", status: "Pending", commission: "KES 1,500" },
  ];

  return (
    <div className="bg-white border rounded-lg shadow p-6 my-8 overflow-x-auto">
      <h2 className="text-xl font-bold text-[#0369a1] mb-4">Commission Reports</h2>
      <table className="min-w-full text-left border">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-2 border">Client</th>
            <th className="p-2 border">Visa Type</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Commission</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="p-2 border">{r.client}</td>
              <td className="p-2 border">{r.visa}</td>
              <td className="p-2 border">{r.status}</td>
              <td className="p-2 border">{r.commission}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";

export default function FileManager() {
  return (
    <div className="bg-white border rounded-lg shadow p-6 my-8">
      <h2 className="text-xl font-bold text-[#0369a1] mb-4">File Manager</h2>
      <input type="file" className="block mb-4" />
      <button className="bg-[#0369a1] text-white px-4 py-2 rounded">
        Upload
      </button>
    </div>
  );
}

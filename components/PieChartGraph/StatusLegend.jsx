import React from "react";

const StatusLegend = ({ chartData }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {chartData.map(({ name,counts, fill }) => (
        <div key={counts} className="flex items-center gap-2">
          <div
            style={{ backgroundColor: fill }}
            className="h-4 w-4 rounded-full"
          ></div>
          <span>{name === "kids" ? "Kids" : name === "mentors" ? "Mentors" : name === "admins" ? "Admins" : "Super Admins"}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusLegend;

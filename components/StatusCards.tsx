import React from "react";
import { IconType } from "react-icons";

interface StatusCardsProps {
  icon: IconType;
  label: string;
  value: number;
  percentage: number;
  isPositive: boolean;
}

const StatusCards: React.FC<StatusCardsProps> = ({
  icon: Icon,
  label,
  value,
  percentage,
  isPositive,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md shadow-blue-200 p-4 flex items-center justify-evenly">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full">
        <Icon className="text-blue-600 text-2xl" />
      </div>
      <div
        className={`text-lg font-semibold ${
          isPositive ? "text-green-700" : "text-red-500"
        }`}
      >
        <div className="ml-4 flex-1">
          <h2 className="text-gray-800 text-2xl font-semibold">{value}</h2>
          <p className="text-gray-800 text-lg">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCards;

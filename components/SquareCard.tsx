import React from "react";
import { IconType } from "react-icons";

interface StatusCardsProps {
  icon: IconType;
  label: string;
  value: number;
  percentage: number;
  isPositive: boolean;
}

const SquareCard: React.FC<StatusCardsProps> = ({
  icon: Icon,
  label,
  value,
}) => {
  return (
    <div className="flex flex-row items-center justify-evenly bg-white shadow-md rounded-md p-4 border-2 border-gray-200 hover:shadow-lg hover:shadow-blue-400">
      <div className="text-blue-700 text-5xl ">
        <Icon className="text-5xl" />
      </div>
      <div>
        <p className="text-3xl font-semibold text-gray-700"> {value}</p>
        <h1 className="text-lg font-bold mt-2 text-gray-700">{label}</h1>
        <button className="rounded-lg p-2 text-green-800">Details </button>
      </div>
    </div>
  );
};

export default SquareCard;

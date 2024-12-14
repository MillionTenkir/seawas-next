"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  AreaChart,
  Area,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminBarChart = () => {
  const data = [
    {
      name: "Grade 4",
      male: 34,
      female: 54,
      total: 32,
    },
    {
      name: "Grade 5",
      male: 30,
      female: 27,
      total: 57,
    },
    {
      name: "Grade 6",
      male: 89,
      female: 78,
      total: 76,
    },
    {
      name: "Grade 7",
      male: 58,
      female: 70,
      total: 128,
    },
    {
      name: "Grade 8",
      male: 130,
      female: 160,
      total: 290,
    },
    {
      name: "Grade 9",
      male: 30,
      female: 60,
      total: 290,
    },
    {
      name: "Grade 10",
      male: 30,
      female: 25,
      total: 290,
    },
    {
      name: "Grade 11",
      male: 46,
      female: 30,
      total: 290,
    },
    {
      name: "Grade 12",
      male: 130,
      female: 160,
      total: 290,
    },
    {
      name: "Others",
      male: 250,
      female: 200,
      total: 290,
    },
  ];
  return (
    <div className="flex flex-col bg-white shadow-lg shadow-gray-400">
      <div className="items-center pb-0">
        <div className="uppercase text-gray-800 font-work-sans text-center text-lg font-bold ">
          Kidpreneurs
        </div>
        <div className="text-gray-800 font-work-sanss  text-center ">
          Kidpreneurs Distribution
        </div>
      </div>
      <div className="flex-1 pb-0">
        <AreaChart
          width={1000}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="male" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4184e1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4184e1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="female" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fc7edd" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#fc7edd" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="male"
            stroke="#4184e1"
            fillOpacity={1}
            fill="url(#male)"
          />
          <Area
            type="monotone"
            dataKey="female"
            stroke="#fc7edd"
            fillOpacity={1}
            fill="url(#female)"
          />
        </AreaChart>
        {/* <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="male" stackId="a" fill="#8884d8" />
          <Bar dataKey="female" stackId="a" fill="#82ca9d" />
          <Bar dataKey="total" fill="#ffc658" />
        </BarChart> */}
      </div>
      <div className="flex-col gap-2 text-sm p-5">
        {/* <StatusLegend chartData={chartDataFilled} /> */}
        <div className="leading-none text-muted-foreground text-gray-800">
          Male & Female Breakdown
        </div>
      </div>
    </div>
  );
};

export default AdminBarChart;

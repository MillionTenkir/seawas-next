"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MoneyBarChart = () => {
  const data = [
    {
      name: "Jan",
      Total: 4000,
      "In Hands": 2400,
      Dispursed: 2400,
    },
    {
      name: "Feb",
      Total: 3000,
      "In Hands": 1398,
      Dispursed: 2210,
    },
    {
      name: "March",
      Total: 2000,
      "In Hands": 9800,
      Dispursed: 2290,
    },
    {
      name: "Apr",
      Total: 2780,
      "In Hands": 3908,
      Dispursed: 2000,
    },
    {
      name: "May",
      Total: 1890,
      "In Hands": 4800,
      Dispursed: 2181,
    },
    {
      name: "Jun",
      Total: 2390,
      "In Hands": 3800,
      Dispursed: 2500,
    },
    {
      name: "Jul",
      Total: 3490,
      "In Hands": 4300,
      Dispursed: 2100,
    },
  ];
  return (
    <div className="text-gray-800">
      <BarChart
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
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="In Hands" stackId="a" fill="#1bff1b" />
        <Bar dataKey="Dispursed" stackId="a" fill="#f55000" />
        <Bar dataKey="Total" fill="#0088FE" />
      </BarChart>
    </div>
  );
};

export default MoneyBarChart;

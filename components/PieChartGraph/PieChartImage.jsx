"use client";
// import { Pie, PieChart, Label } from "recharts";
// // import {
// //   ChartContainer,
// //   ChartTooltip,
// //   ChartTooltipContent,
// // } from "../charts/charts";
import CountsLabel from "./CountsLabel";
// import processStatus from "./processStatus";

// const ChartDiagramPie = ({ data, total }) => {
//   const chartDataProcessed = Array.isArray(data) ? processStatus(data) : [];
//   console.log("*****: ", chartDataProcessed);
//   return (
//     <div className="mx-auto aspect-square max-h-[250px]">
//       <PieChart>
//         <h1>hello</h1>
//         <Pie
//           data={chartDataProcessed}
//           dataKey="counts"
//           nameKey="name"
//           innerRadius={50}
//           outerRadius={100}
//           strokeWidth={5}
//         >
//           <Label
//             content={({ viewBox }) => CountsLabel({ ...viewBox, total })}
//           />
//         </Pie>
//       </PieChart>
//     </div>
//   );
// };

// export default ChartDiagramPie;

import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

const PieChartComp = ({ data, total }) => {
  console.log(data, "From Pie");
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];
  return (
    <>
      {/* <ResponsiveContainer width="100%"> */}
      <div className="min-h[100px] flex justify-center items-center">
        <PieChart width={400} height={250}>
          <Pie
            data={data}
            dataKey="counts"
            nameKey="name"
            innerRadius={50}
            outerRadius={80}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => CountsLabel({ ...viewBox, total })}
            />
          </Pie>
        </PieChart>
      </div>

      {/* </ResponsiveContainer> */}
    </>
  );
  // }
};

export default PieChartComp;

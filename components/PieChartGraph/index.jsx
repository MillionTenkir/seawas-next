"use client";
import ChartDiagramPie from "./PieChartImage";
import processStatus from "./processStatus";
import StatusLegend from "./StatusLegend";
const chartDataFilled = [
  { name: "kids", counts: 2400 },
  { name: "mentors", counts: 250 },
  { name: "admins", counts: 100 },
  { name: "superadmins", counts: 80 },
];
const total = chartDataFilled.reduce((acc, curr) => acc + curr.counts, 0);

console.log("ht e tolat value: ", total);

const chartDataProcessed = Array.isArray(chartDataFilled)
  ? processStatus(chartDataFilled)
  : [];

console.log("#####: ", chartDataProcessed);

const AdminPieChart = () => {
  return (
    <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="items-center pb-0 flex flex-col space-y-1.5 p-6">
        <div className="uppercase text-2xl text-gray-800 font-semibold leading-none tracking-tight">
          Total
        </div>
        <div className="text-gray-700 text-sm text-muted-foreground">
          Total Personal in Seawas
        </div>
      </div>
      <div className="flex-1 pb-0 p-6 pt-0">
        <ChartDiagramPie data={chartDataProcessed} total={total} />
      </div>
      <div className="flex-col gap-2 text-sm flex items-center p-6 pt-0">
        <StatusLegend chartData={chartDataProcessed} />
        <div className="leading-none text-muted-foreground text-gray-700">
          Organization Breakdown
        </div>
      </div>
    </div>
  );
};

export default AdminPieChart;

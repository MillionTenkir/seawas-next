import SquareCard from "@/components/SquareCard";
import StatusCards from "@/components/StatusCards";
import AdminPieChart from "@/components/PieChartGraph";
import BarChart from "@/components/BarChart";
import React from "react";
import {
  FaChalkboardTeacher,
  FaChild,
  FaMapPin,
  FaMoneyCheck,
  FaProjectDiagram,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import { FaUsersRays } from "react-icons/fa6";
import { CiDollar, CiMapPin, CiUser } from "react-icons/ci";
import { LiaProjectDiagramSolid } from "react-icons/lia";

const page = () => {
  return (
    <>
      <div className="mx-20">
        <section className="w-full flex items-end flex-col ">
          <div className="flex flex-row">
            <div className="container mx-auto">
              <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[30px] sm:leading-[64px] text-[10px] leading-[46px] m-5 justify-end">
                Dashboard
              </h1>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <StatusCards
            icon={FaUsers}
            label={"Total"}
            value={2830}
            percentage={40}
            isPositive={true}
          />
          <StatusCards
            icon={FaChild}
            label={"Kidpreneurs"}
            value={2400}
            percentage={8}
            isPositive={false}
          />
          <StatusCards
            icon={FaChalkboardTeacher}
            label={"Mentors"}
            value={250}
            percentage={14}
            isPositive={false}
          />
          <StatusCards
            icon={FaUsersRays}
            label={"Staff"}
            value={180}
            percentage={20}
            isPositive={true}
          />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-lg">
            <SquareCard
              icon={CiMapPin}
              label={"Branches"}
              value={17}
              percentage={40}
              isPositive={true}
            />
            <SquareCard
              icon={CiUser}
              label={"Awaiting approval"}
              value={230}
              percentage={8}
              isPositive={false}
            />
            <SquareCard
              icon={LiaProjectDiagramSolid}
              label={"Projects"}
              value={50}
              percentage={14}
              isPositive={false}
            />
            <SquareCard
              icon={CiDollar}
              label={"Transaction"}
              value={18870}
              percentage={20}
              isPositive={true}
            />
          </div>
          <div>
            <AdminPieChart />
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            <div className="col-span-4 p-4 rounded bg-white shadow-md shadow-gray-200">
              <BarChart />
            </div>
            {/* <div className="col-span-1 p-4 rounded bg-white shadow-md shadow-gray-200">
              <AdminPieChart />
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default page;

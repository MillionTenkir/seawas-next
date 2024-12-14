import Table from "@/components/Table";
import React from "react";
import { FaPlus, FaShare } from "react-icons/fa";

const page = () => {
  const data = [
    {
      name: "Cherry Delight",
      id: "#KP267400",
      branch: "Sheger",
      email: "abdutolla@gmail.com",
      type: "Super Admin",
      status: "Pending",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Kiwi",
      id: "#TL681535",
      branch: "Sheger",
      email: "abdutolla@gmail.com",
      type: "Admin",
      status: "Active",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Mango Magic",
      id: "#GB651535",
      branch: "Sheger",
      email: "abdutolla@gmail.com",
      type: "Super Admin",
      status: "Inactive",
      color: "bg-red-100 text-red-700",
    },
    {
      name: "Joy Care",
      id: "#ER651535",
      branch: "Sheger",
      email: "abdutolla@gmail.com",
      type: "Mentor",
      status: "Disabled",
      color: "bg-red-100 text-red-700",
    },
    {
      name: "Blueberry Bliss",
      id: "#SD487441",
      branch: "Sheger",
      email: "abdutolla@gmail.com",
      type: "Mentor",
      status: "Bouncing",
      color: "bg-orange-100 text-orange-700",
    },
    {
      name: "Watermelon",
      id: "#TL449003",
      branch: "Sheger",
      email: "abdutolla@gmail.com",
      type: "Mentor",
      status: "Pending",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Trilogy",
      id: "#KP651535",
      branch: "Sheger",
      email: "abdutolla@gmail.com",
      type: "Kidpreneur",
      status: "Active",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Dryskin",
      id: "#GB449003",
      branch: "Sheger",
      email: "abdutolla@gmail.com",
      type: "Kidpreneur",
      status: "Inactive",
      color: "bg-red-100 text-red-700",
    },
    {
      name: "Olive Oil",
      id: "#SD449003",
      branch: "Sheger",
      email: "abdutolla@gmail.com",
      type: "Kidpreneur",
      status: "Disabled",
      color: "bg-red-100 text-red-700",
    },
    {
      name: "Citrus Brust",
      id: "#ER585612",
      branch: "Sheger",
      email: "abdutolla@gmail.com",
      type: "Kidpreneur",
      status: "Bouncing",
      color: "bg-orange-100 text-orange-700",
    },
  ];
  return (
    <>
      <div className="mx-20">
        <section className="w-full flex items-end flex-col ">
          <div className="flex flex-row">
            <div className="container mx-auto">
              <h1 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[25px] sm:leading-[64px] text-[10px] leading-[46px] m-5 justify-end">
                Pending Approvals
              </h1>
            </div>
          </div>
        </section>
        <section className="flex justify-evenly items-center">
          {/* <div className="">
            <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[25px] sm:leading-[64px] text-[10px] leading-[46px] m-5">
              Pending Approvals
            </h1>
          </div> */}
          <div>.</div>
          <div>
            <div className="bg-blue-50 shadow-xl shadow-blue-300  h-14  text-gray-700 font-light text-[13px] py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
              <div className="flex items-center justify-center">
                <span className="space-x-2 px-2">Showing:</span>

                <select className="bg-blue-50">
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-blue-50 shadow-xl shadow-blue-300  h-14  text-gray-700 font-light text-[13px] py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
              <div className="flex items-center space-x-2">
                <FaShare />
                <span>Export</span>
              </div>
            </button>
          </div>
          <div>
            <button className="bg-blue-600 shadow-xl shadow-blue-300  h-14  text-white font-light text-[13px] py-2 px-6 rounded-lg hover:bg-blue-950 transition duration-300">
              <div className="flex items-center space-x-2">
                <FaPlus />
                <span>Add New Members</span>
              </div>
            </button>
          </div>
        </section>
        <div className="mt-5"></div>
        <section className="">
          <Table data={data} />
        </section>
      </div>
    </>
  );
};

export default page;

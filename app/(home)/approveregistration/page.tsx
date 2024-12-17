"use client";
import Table from "@/components/Table";
import React, { useState } from "react";
import { FaPlus, FaShare } from "react-icons/fa";

const DetailsModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-50 overflow-auto min-w-[80%]">
      <div className="relative p-4 w-full md:w-auto max-h-full">
        <div className="relative bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-300">
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              User Details
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-700 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <section className="my-5">
            <div className="flex items-center justify-evenly">
              <div>Profile Picture</div>
              <div>User Info Details</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [details, setDetails] = useState(null);
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

  const onEditClicked = (item) => {
    setDetails(item);
    setOpenDetailModal(true);
  };

  const closeDetailsModal = () => {
    setOpenDetailModal(false);
  };

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
        <section className="flex justify-end items-center">
          <div className="mx-5">
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
          <div className="mx-5">
            <button className="bg-blue-50 shadow-xl shadow-blue-300  h-14  text-gray-700 font-light text-[13px] py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
              <div className="flex items-center space-x-2">
                <FaShare />
                <span>Export</span>
              </div>
            </button>
          </div>
          <div className="mx-5">
            <button className="bg-blue-600 shadow-xl shadow-blue-300  h-14  text-white font-light text-[13px] py-2 px-6 rounded-lg hover:bg-blue-950 transition duration-300">
              <div className="flex items-center space-x-2">
                <FaPlus />
                <span>Add New Members</span>
              </div>
            </button>
          </div>
        </section>
        <div className="mt-10"></div>
        <section>
          <div className="flex justify-center items-center mt-5 mb-3">
            <input
              type="text"
              placeholder="Search by name..."
              className="px-4 py-2 border border-gray-300 rounded-md min-w-[70%] mx-3"
            />

            <button className="px-4 py-2 bg-blue-500 text-white rounded-md sm:w-auto w-full mx-3 shadow-md shadow-blue-400">
              Search
            </button>
          </div>
        </section>
        <section className="">
          <Table data={data} onEditClicked={onEditClicked} />
        </section>
      </div>
      {openDetailModal && (
        <div className="w-auto">
          <DetailsModal
            isOpen={openDetailModal}
            onClose={closeDetailsModal}
            data={details}
          />
        </div>
      )}
    </>
  );
};

export default page;

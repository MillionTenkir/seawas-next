import MoneyBarChart from "@/components/MoneyBarChart";
import MoneyPieChart from "@/components/MoneyPieChart";
import AdminPieChart from "@/components/PieChartGraph";
import React from "react";

const page = () => {
  return (
    <>
      <section className="w-full flex items-center flex-col ">
        <div className="flex flex-row">
          <div className="container mx-auto">
            <h1 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[30px] sm:leading-[64px] text-[10px] leading-[46px] m-5">
              Transactions
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center flex-col px-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-row justify-evenly items-center gap-5 bg-white shadow-md shadow-gray-200">
            <div className="flex flex-col gap-5 md:divide-y md:divide-gray-300  ">
              <div className="">
                <h1 className="uppercase font-work-sans font-semibold text-gray-800 sm:text-[20px] sm:leading-[64px] text-[10px] leading-[46px] text-center">
                  Total $
                </h1>
                <h1 className="uppercase font-work-sans font-medium text-green-700 sm:text-[30px] sm:leading-[64px] text-[10px] leading-[46px] text-center">
                  $500K
                </h1>
              </div>
              <div>
                <h1 className="uppercase font-work-sans font-semibold text-gray-800 sm:text-[20px] sm:leading-[64px] text-[10px] leading-[46px] text-center">
                  Contracted $
                </h1>
                <h1 className="uppercase font-work-sans font-medium text-green-700 sm:text-[30px] sm:leading-[64px] text-[10px] leading-[46px] text-center">
                  $350K
                </h1>
              </div>
            </div>
            <div className="flex flex-col  gap-5 md:divide-y md:divide-gray-300">
              <div className="">
                <h1 className="uppercase font-work-sans font-semibold text-gray-800 sm:text-[20px] sm:leading-[64px] text-[10px] leading-[46px] text-center">
                  Promised $
                </h1>
                <h1 className="uppercase font-work-sans font-medium text-green-700 sm:text-[30px] sm:leading-[64px] text-[10px] leading-[46px] text-center">
                  $120K
                </h1>
              </div>
              <div>
                <h1 className="uppercase font-work-sans font-semibold text-gray-800 sm:text-[20px] sm:leading-[64px] text-[10px] leading-[46px] text-center">
                  Collected $
                </h1>
                <h1 className="uppercase font-work-sans font-medium text-green-700 sm:text-[30px] sm:leading-[64px] text-[10px] leading-[46px] text-center">
                  $90K
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ml-10 bg-white">
            <AdminPieChart />
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center flex-col px-6 my-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white">
            <MoneyBarChart />
          </div>
          <div className="flex justify-center items-center ml-10 bg-white">
            <AdminPieChart />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

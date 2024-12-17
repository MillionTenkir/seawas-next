import React from "react";
import StatusCards from "@/components/StatusCards";
import { FaChild, FaUsers } from "react-icons/fa";
import Table from "@/components/Table";

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
  ];
  
  return (
    <>
      <div className="mx-20">
        <section className="w-full flex items-end flex-col ">
          <div className="flex flex-row">
            <div className="container mx-auto">
              <h1 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[30px] sm:leading-[64px] text-[10px] leading-[46px] m-5 justify-end">
                Assigned Kidpreneurs
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
            label={"Assigned"}
            value={2400}
            percentage={8}
            isPositive={false}
          />
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
        </section>
        <section>
          <Table data={data} />
        </section>
      </div>
    </>
  );
};

export default page;

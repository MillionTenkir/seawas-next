import Maintee from "@/components/Maintee";
import React from "react";

const page = () => {
  const mentorList = [
    {
      name: "Joel Tibebu",
      sector: "Agriculture",
      availability: "Available",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "William Miteku",
      sector: "Technology",
      availability: "Pending",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Abenezer Asefa",
      sector: "Educational",
      availability: "Missing",
      color: "bg-red-100 text-red-700",
    },
    {
      name: "Joel Tibebu",
      sector: "Health",
      availability: "Available",
      color: "bg-green-100 text-green-700",
    },
  ];
  return (
    <>
      <div className="mx-20">
        <section className="w-full flex items-end flex-col ">
          <div className="flex flex-row">
            <div className="container mx-auto">
              <h1 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[25px] sm:leading-[64px] text-[10px] leading-[46px] m-5 justify-end">
                Mentor Matching
              </h1>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Maintee />
          <div>
            <h1 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[18px] sm:leading-[64px] text-[10px] leading-[46px] mt-5 text-center">
              Available Mentors
            </h1>
            <div className="overflow-x-auto bg-white rounded-3xl p-5 border">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-gray-800 font-medium">
                      Full Name
                    </th>
                    <th className="px-4 py-2 text-left text-gray-800 font-medium">
                      Sector
                    </th>
                    <th className="px-4 py-2 text-left text-gray-800 font-medium">
                      Availablity
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {mentorList.map((eachMentor, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-gray-500">
                        {eachMentor.name}
                      </td>
                      <td className="px-4 py-2 text-gray-500">
                        {eachMentor.sector}
                      </td>
                      <td className="px-4 py-2 text-gray-500">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${eachMentor.color}`}
                        >
                          {eachMentor.availability}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;

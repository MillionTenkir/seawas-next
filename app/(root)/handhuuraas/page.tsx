import React from "react";

const page = () => {
  const DonorsList = [
    {
      DonorImage: "/Art Card.png",
      DonorName: "Iman Kadir",
      DonorTitle: "Technology",
    },
    {
      DonorImage: "/Art Card-1.png",
      DonorName: "Abdisa Tola",
      DonorTitle: "Health",
    },
    {
      DonorImage: "/Art Card-2.png",
      DonorName: "Roba Sagni",
      DonorTitle: "Agriculutre",
    },
    {
      DonorImage: "/Art Card-3.png",
      DonorName: "Chaltu Siraj",
      DonorTitle: "Finance",
    },
    {
      DonorImage: "/Art Card-4.png",
      DonorName: "Ebisa Jarso",
      DonorTitle: "Construction",
    },
  ];
  const sectorList = [
    {
      sectorImage: "/educationalImage.jpeg",
      sectorName: "Educational",
    },
    {
      sectorImage: "/healthcare.jpeg",
      sectorName: "Health",
    },
    {
      sectorImage: "/agriculture.jpeg",
      sectorName: "Agriculture",
    },
    {
      sectorImage: "/technology1.jpeg",
      sectorName: "Technological",
    },
    {
      sectorImage: "/financial.jpeg",
      sectorName: "Financial",
    },
    {
      sectorImage: "/construction.jpeg",
      sectorName: "Construction",
    },
  ];
  return (
    <>
      <section className="w-full min-h-[300px] flex flex-col py-10 px-10">
        <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[36px] sm:leading-[64px] text-[10px] leading-[46px] my-5 px-20">
          Sector Categories
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6">
          {sectorList?.map((eachSector, index) => (
            <div
              key={index}
              className="w-full mt-10 flex flex-col justify-center items-center"
            >
              <img
                src={eachSector.sectorImage}
                alt={"sector Image" + index}
                className="rounded-full w-40 h-40"
              />
              <h1 className="mt-3 text-gray-800 text-[20px] font-work-sans">
                {eachSector.sectorName}
              </h1>
            </div>
          ))}
        </div>
      </section>
      <div className="divider"></div>
      <section className="w-full min-h-[300px] flex flex-col py-10 px-10">
        <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[30px] sm:leading-[64px] text-[10px] leading-[46px] my-5 text-center">
          Active Handhuuraas' on Projects
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 mt-5">
          {DonorsList?.map((eachDonor, index) => (
            <div
              className="w-full mt-10 flex flex-col justify-center items-center"
              key={index}
            >
              <img
                className="rounded-full w-56 h-56"
                alt={"Donors image" + index}
                src={eachDonor.DonorImage}
              />
              <div className="mt-4 font-work-sans">
                <h1 className="text-gray-900 text-xl text-center">
                  {eachDonor.DonorName}
                </h1>
                <h1 className="text-gray-900 text-2xl text-center">
                  {eachDonor.DonorTitle}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="divider"></div>
      <section className="" id="get-started">
        <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[25px] sm:leading-[64px] text-[10px] leading-[46px] my-2 text-center">
          Are you a young entrepreneur with big dreams and innovative <br />{" "}
          ideas?
        </h1>
        <h1 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[20px] sm:leading-[64px] text-[10px] leading-[46px] text-center">
          Enroll Now
        </h1>
        <form className="px-28 font-work-sans">
          <div className="flex flex-wrap justify-evenly items-start gap-y-6 mt-16 px-10">
            {/* First Name */}
            <div className="flex flex-col w-1/2 px-4">
              <label className="text-gray-800 mb-2">First Name</label>
              <input
                type="text"
                className="bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-lg pb-2"
                placeholder="Abdisa"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col w-1/2 px-4">
              <label className="text-gray-800 mb-2">Last Name</label>
              <input
                type="text"
                className="bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-lg pb-2"
                placeholder="Tolla"
              />
            </div>

            {/* Age */}
            <div className="flex flex-col w-1/2 px-4">
              <label className="text-gray-800 mb-2">Age</label>
              <input
                type="text"
                className="bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-lg pb-2"
                placeholder="10"
              />
            </div>

            {/* Grade Level */}
            <div className="flex flex-col w-1/2 px-4">
              <label className="text-gray-800 mb-2">Grade Level</label>
              <input
                type="text"
                className="bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-lg pb-2"
                placeholder="Grade 4"
              />
            </div>

            {/* Sector Options */}
            <div className="flex flex-col w-full px-4">
              <h1 className="text-gray-800 mb-4">Select Sector?</h1>
              <div className="flex items-center space-x-8">
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="option"
                    defaultChecked
                    className="form-radio text-blue-600 h-5 w-5"
                  />
                  <span className="text-gray-700">Financial</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    disabled
                    name="option"
                    className="form-radio text-blue-600 h-5 w-5"
                  />
                  <span className="text-gray-700">Technological</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    disabled
                    name="option"
                    className="form-radio text-blue-600 h-5 w-5"
                  />
                  <span className="text-gray-700">Educational</span>
                </label>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    disabled
                    name="option"
                    className="form-radio text-blue-600 h-5 w-5"
                  />
                  <span className="text-gray-700">Agriculture</span>
                </label>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col w-full px-4">
              <label className="text-gray-800 mb-2">Email</label>
              <input
                type="text"
                className="bg-gray-50 border-0 border-b border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-sm pb-2"
                placeholder="AbdisaTolla@gmail.com"
              />
            </div>

            {/* Enroll Button */}
            <div className="w-full flex justify-center px-4">
              <button className="bg-blue-700 w-1/2 h-14 mt-5 text-white font-semibold rounded-lg hover:bg-blue-950 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default page;

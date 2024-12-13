import SwiperBar from "@/components/Swiper";
import React from "react";

const page = () => {
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
  const DonorsList = [
    {
      DonorImage: "/BussinessManOne.jpeg",
      DonorName: "Hailu Wonde",
      DonorTitle: "A business man",
      feedback:
        "Sponsoring Handhurraas has been truly rewarding. Their dedication, transparency,and impactful initiatives make a real difference. Proud to be associated with such a worthy cause. Highly recommend partnering with them. Excited for our continued collaboration and their ongoing success",
    },
    {
      DonorImage: "/PresidentOfNgo.jpeg",
      DonorName: "Lensa Mohammed",
      DonorTitle: "President of NGO",
      feedback:
        "Sponsoring Handhurraas has been truly rewarding. Their dedication, transparency,and impactful initiatives make a real difference. Proud to be associated with such a worthy cause. Highly recommend partnering with them. Excited for our continued collaboration and their ongoing success",
    },
    {
      DonorImage: "/sqaurepic.jpeg",
      DonorName: "Gada Tufa",
      DonorTitle: "CEO of Technology CC",
      feedback:
        "Sponsoring Handhurraas has been truly rewarding. Their dedication, transparency,and impactful initiatives make a real difference. Proud to be associated with such a worthy cause. Highly recommend partnering with them. Excited for our continued collaboration and their ongoing success",
    },
    {
      DonorImage: "/squareBW.jpeg",
      DonorName: "Dureti Gadiso",
      DonorTitle: "Bussiness Woman",
      feedback:
        "Sponsoring Handhurraas has been truly rewarding. Their dedication, transparency,and impactful initiatives make a real difference. Proud to be associated with such a worthy cause. Highly recommend partnering with them. Excited for our continued collaboration and their ongoing success",
    },
  ];
  return (
    <>
      <section className="w-full min-h-[300px] flex flex-col py-10 px-10">
        <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[36px] sm:leading-[64px] text-[10px] leading-[46px] my-5  px-20">
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
        <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[36px] sm:leading-[64px] text-[10px] leading-[46px] my-5 text-center">
          Our Sponsors and Donors
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-5">
          {DonorsList?.map((eachDonor, index) => (
            <div
              className="w-full mt-10 flex flex-col justify-center items-center"
              key={index}
            >
              <img
                className="rounded-full w-60 h-60"
                alt={"Donors image" + index}
                src={eachDonor.DonorImage}
              />
              <div className="mt-4">
                <h1 className="mt-3 text-gray-800 text-[20px] font-work-sans text-center">
                  {eachDonor.DonorName}
                </h1>
                <h1 className="text-gray-900 text-2xl text-center font-work-sans">
                  {eachDonor.DonorTitle}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="divider"></div>
      <section className="px-16">
        <SwiperBar donorsList={DonorsList} />
      </section>
    </>
  );
};

export default page;

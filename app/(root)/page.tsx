import Image from "next/image";
import React from "react";
import { BadgeCheck, Factory, Handshake, User } from "lucide-react";
import Carousel from "@/components/Carousel";
import Events from "@/components/Events";

const page = () => {
  return (
    <>
      <section className="w-full min-h-[530px] flex justify-center items-center flex-col py-10 px-6 my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[36px] sm:leading-[64px] text-[10px] leading-[46px] my-5">
              Handhuuraa Kidpreneurs: <br />
              Empowering Young <br /> Entrepreneurs
            </h1>
            <p className="font-normal text-[13px] text-gray-700 max-w-2xl break-words">
              In today's ever-changing world, fostering an entrepreneurial
              spirit in our youth at a young age is crucial. The Kidpreneur
              Program ignites a passion for business in young minds, empowering
              them with the skills to solve problems, think creatively, and turn
              their ideas into reality. Through this entrepreneurship journey,
              they build essential skills like confidence, resilience, and
              financial literacy, setting them on a path to success in whatever
              they choose to pursue.
            </p>
            <div className="text-left mt-10 font-work-sans">
              <button
                // onClick={handleGetStarted}
                className="bg-blue-700 shadow-2xl shadow-blue-600 w-2/3 md:w-1/3 h-14  text-white font-light text-[13px] py-2 px-6 rounded-lg hover:bg-blue-950 transition duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/boyandgirl.png"
              alt="boy and girl"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <section className=" font-work-sans">
        {/* Stat preview */}
        <div className="flex flex-col md:flex-row justify-around items-center p-6 md:p-12 space-y-8 md:space-y-0 md:divide-x md:divide-gray-300">
          <div className="flex flex-col-1 items-center space-y-2">
            <div className="p-4 bg-blue-100 rounded-full mx-10">
              <User className="text-blue-600 text-2xl" />
            </div>

            <div>
              <div className="text-3xl font-bold text-gray-900">90+</div>
              <p className="text-gray-500">Handhuuraas</p>
            </div>
          </div>
          <div className="flex flex-col-1 items-center space-y-2">
            <div className="p-4 bg-blue-100 rounded-full mx-10">
              <Factory className="text-blue-600 text-2xl" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">30+</div>
              <p className="text-gray-500">Sectors</p>
            </div>
          </div>
          <div className="flex flex-col-1 items-center space-y-2">
            <div className="p-4 bg-blue-100 rounded-full  mx-10">
              <Handshake className="text-blue-600 text-2xl" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <p className="text-gray-500">Sponsors</p>
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <div className="divider"></div>
      {/* 3rd Content */}
      <div className="grid md:grid-cols-2 sm:gird-cols-1 items-center font-work-sans">
        <div className="flex justify-center">
          <img src="/kidFour.png" alt="Kid Four" />
        </div>
        <div className="flex flex-col">
          <h1 className="uppercase py-2 font-work-sans font-bold text-gray-800 sm:text-[36px] sm:leading-[64px] text-[10px] leading-[46px] my-5 ">
            Our Objectives
          </h1>
          <p className="text-gray-500 text-lg">
            Empowering young entrepreneurs by giving them the knowledge,
            resources,
            <br />
            and support needed to turn their ideas into successful ventures
            while fostering creativity,
            <br />
            innovation, and leadership skills.
          </p>
          <div className="flex items-center space-x-5 space-y-4 ">
            <BadgeCheck className="text-blue-600 size-5 mt-4" />
            <span className="text-gray-500">Educational Empowerment</span>
          </div>
          <div className="flex items-center space-x-5 space-y-4">
            <BadgeCheck className="text-blue-600 size-5 mt-4" />
            <span className="text-gray-500">Creativity Enhancement</span>
          </div>
          <div className="flex items-center space-x-5 space-y-4">
            <BadgeCheck className="text-blue-600 size-5 mt-4" />
            <span className="text-gray-500">Financial Literacy</span>
          </div>
          <div className="flex items-center space-x-5 space-y-4">
            <BadgeCheck className="text-blue-600 size-5 mt-4" />
            <span className="text-gray-500">Community Engagment</span>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="divider"></div>
      <div className="w-full flex justify-center items-center flex-col px-6">
        <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[36px] sm:leading-[64px] text-[10px] leading-[46px] my-5 items-start">
          Program Components
        </h1>
        <div className="my-16 grid grid-cols-1 md:grid-cols-4 gap-10 justify-evenly mt-10 px-28">
          <Carousel />
          <Carousel />
          <Carousel />
          <Carousel />
        </div>
      </div>
      <div className="divider"></div>
      <div className="w-full flex justify-center items-center flex-col px-6">
        <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[36px] sm:leading-[64px] text-[10px] leading-[46px] my-5 ">
          Upcoming Events
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Events />
        </section>
      </div>
    </>
  );
};

export default page;

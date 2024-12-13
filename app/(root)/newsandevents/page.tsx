import EventsList from "@/components/EventsList";
import NewsList from "@/components/NewsList";
import React from "react";

const page = () => {
  return (
    <>
      <section className="w-full pattern flex justify-center items-center flex-col px-6">
        <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[36px] sm:leading-[64px] text-[10px] leading-[46px] mt-5 mb-2 px-20 text-center">
          News And Events
        </h1>
      </section>
      {/* <div className="divider"></div> */}
      <section className="grid grid-cols-1 md:grid-cols-3 px-20">
        <NewsList />
        <EventsList />
      </section>
    </>
  );
};

export default page;

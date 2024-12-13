"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
type Donor = {
  DonorImage: string;
  DonorName: string;
  DonorTitle: string;
  feedback: string;
};

const SwiperBar = ({ donorsList }: { donorsList: Donor[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={5}
        slidesPerView={3}
        // onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSlideChangeTransitionEnd={(swiper) => {
          setActiveIndex(swiper.realIndex);
          console.log(swiper.realIndex, "Active index");
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        <div className="flex flex-row">
          {donorsList?.map((eachDonor, index) => (
            <SwiperSlide className="m-10" key={index}>
              <div
                className={`flex flex-col min-w-4xl justify-center items-center max-w-sm rounded-lg overflow-hidden m-7 transition-transform duration-300 ${
                  index === (activeIndex + 1) % donorsList.length
                    ? "scale-110"
                    : "scale-75"
                }`}
              >
                <img
                  className="rounded-full object-cover w-32 h-32"
                  src={eachDonor.DonorImage}
                  alt={eachDonor.DonorName}
                />
                <div className="mt-5">
                  <h2 className="text-gray-900 text-2xl text-center font-work-sans">
                    {eachDonor.DonorName}
                  </h2>
                  <h2 className="text-gray-900 text-xl text-center font-work-sans">
                    {eachDonor.DonorTitle}
                  </h2>
                  <p className="text-gray-600 mt-3 text-center ">
                    {eachDonor.feedback}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperBar;

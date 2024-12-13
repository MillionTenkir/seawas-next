import React from "react";

const Carousel = () => {
  return (
    <div className="min-w-40 max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden mb-10 font-work-sans">
      <img
        className="w-full object-cover"
        src="/peoplespic.png"
        alt="Workshops and Seminars"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">Curriculum Development:</h2>
        <p className="text-gray-800 font-work-sans">
          Design a comprehensive curriculum covering topics such as ideation,
          market research, product development, marketing, finance, and
          presentation skills. Pitch Competitions that Organize periodic pitch
          competitions where Kidpreneurs can showcase their business ideas,
          receive constructive feedback, and compete for funding and
          recognition.
        </p>
      </div>
    </div>
  );
};

export default Carousel;

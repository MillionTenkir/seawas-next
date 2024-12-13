import React from "react";
type Event = {
  image: string;
  date: string;
  details: String;
};

const events = [
  {
    image: "/eventsOne.png",
    date: "30 April",
    details: "Empowering young Entrepreneurs Seminar",
  },
  {
    image: "/eventsOne.png",
    date: "14 June",
    details: "Enterprenuers Path Finding Session",
  },
  {
    image: "/eventsOne.png",
    date: "03 September",
    details: "How to Grow my ideas into reality",
  },
];
const EventsDrawer = () => {
  return (
    <>
      {events.map((eachEvent: Event, index) => (
        <div
          key={index}
          className="bg-white shadow-sm shadow-gray-500 py-6 px-5 rounded-[22px] hover:shadow-lg hover:shadow-blue-500"
        >
          <div className="w-full bg-white">
            <img
              src={eachEvent.image}
              className="startup-card_img"
              alt="events"
            />
            <h1 className=" text-[25px] font-semibold font-work-sans text-gray-800 mt-5">
              {eachEvent.date}
            </h1>
            <h1 className="text-gray-800 font-work-sans">
              {eachEvent.details}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventsDrawer;

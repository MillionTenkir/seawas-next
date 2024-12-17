import React from "react";

const EventsList = () => {
  const eventListManager = [
    {
      id: 1,
      eventName: "SEAWAS Anniversary",
      date: "December 10, 2024",
      color: "bg-yellow-300",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illum ducimus mollitia nesciunt numquam excepturi, in qui assumenda repellendus doloremque!",
    },
    {
      id: 2,
      eventName: "Seminar",
      date: "December 10, 2024",
      color: "bg-blue-500",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illum ducimus mollitia nesciunt numquam excepturi, in qui assumenda repellendus doloremque!",
    },
    {
      id: 3,
      eventName: "Get together",
      date: "December 14, 2024",
      color: "bg-red-500",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illum ducimus mollitia nesciunt numquam excepturi, in qui assumenda repellendus doloremque!",
    },
    {
      id: 4,
      eventName: "Final Round Registration",
      date: "December 20, 2024",
      color: "bg-green-500",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illum ducimus mollitia nesciunt numquam excepturi, in qui assumenda repellendus doloremque!",
    },
  ];
  return (
    <>
      <div className="container mx-auto p-6 font-work-sans">
          <h1 className="uppercase text-center text-[20px] font-bold text-gray-800" >Events</h1>
        <div className="relative border-l border-gray-300">
          {eventListManager.map((eachEventList, index) => (
            <div
              className="mb-10 ml-6 hover:shadow-lg hover:shadow-blue-400 rounded-3xl"
              key={index}
            >
              <span
                className={`absolute flex items-center justify-center w-6 h-6 ${eachEventList.color} rounded-full -left-3`}
              >
                {/* <span className="w-3 h-3 bg-white rounded-full"></span> */}
              </span>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  {eachEventList.eventName}
                </h3>
                <time className="block mb-2 text-sm text-gray-500">
                  {eachEventList.date}
                </time>
                <p className="text-gray-600 text-sm">
                  {eachEventList.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsList;

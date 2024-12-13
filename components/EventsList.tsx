import React from "react";

const EventsList = () => {
  const eventListManager = [
    {
      id: 1,
      eventName: "Seminar",
      date: "December 10, 2024",
      color: "blue",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illum ducimus mollitia nesciunt numquam excepturi, in qui assumenda repellendus doloremque!",
    },
    {
      id: 2,
      eventName: "Get together",
      date: "December 14, 2024",
      color: "red",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illum ducimus mollitia nesciunt numquam excepturi, in qui assumenda repellendus doloremque!",
    },
    {
      id: 3,
      eventName: "Final Round Registration",
      date: "December 20, 2024",
      color: "green",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident illum ducimus mollitia nesciunt numquam excepturi, in qui assumenda repellendus doloremque!",
    },
  ];
  return (
    <>
      <div className="container mx-auto p-6 font-work-sans">
        <div className="relative border-l border-gray-300">
          {eventListManager.map((eachEventList, index) => (
            <div
              className="mb-10 ml-6 hover:shadow-lg hover:shadow-blue-400 rounded-3xl"
              key={index}
            >
              <span
                className={`absolute flex items-center justify-center w-6 h-6 bg-${eachEventList?.color}-500 rounded-full -left-3`}
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

import React from "react";

const page = () => {
  return (
    <>
      <div className="mx-20">
        <section className="w-full flex items-end flex-col ">
          <div
            className="flex bg-white shadow-md rounded-2xl my-5 p-5
           overflow-hidden hover:shadow-lg hover:shadow-gray-400"
          >
            <img
              src="/sqaurepic.jpeg"
              alt="donor"
              className="w-auto object-cover rounded-full"
            />
            <div className="pl-5 p-4 flex flex-col justify-between">
              <h2 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[20px]">
                Gada Tufa
              </h2>
              <h4 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[15px]">
                CEO of Technology CC
              </h4>
              <p className="text-gray-600 mt-2 text-xs">
                I am here to help. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Error qui modi suscipit, ipsa pariatur
                voluptates ipsam dolores unde asperiores beatae.
              </p>
              <div className="flex items-center justify-end">
                <button className=" inline-block bg-blue-500 text-white rounded-xl p-3 hover:shadow-lg hover:shadow-gray-400">
                  Edit Profile Details
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;

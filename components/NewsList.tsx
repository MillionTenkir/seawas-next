import { ListCollapse } from "lucide-react";
import React from "react";

const NewsList = () => {
  const newsListDetails = [
    {
      id: 1,
      views: 230,
      image: "/peoplespic.png",
      title: "3rd Round winners",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora ducimus debitis repellendus veniam repudiandae ea facilis reiciendis voluptatem. Quia sint atque ducimus quidem itaque at ea voluptatibus eaque possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis, voluptas, ipsa corrupti cumque eos nobis culpa deleniti suscipit recusandae ea unde omnis accusamus quod enim dolores, assumenda vitae? Rem.",
    },
    {
      id: 2,
      views: 126,
      image: "/eventsOne.png",
      title: "New Training On The Way",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora ducimus debitis repellendus veniam repudiandae ea facilis reiciendis voluptatem. Quia sint atque ducimus quidem itaque at ea voluptatibus eaque possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis, voluptas, ipsa corrupti cumque eos nobis culpa deleniti suscipit recusandae ea unde omnis accusamus quod enim dolores, assumenda vitae? Rem.",
    },
  ];
  return (
    <>
      <div className="container mx-auto p-6 space-y-6 col-span-2">
        {newsListDetails.map((eachNews, index) => (
          <div
            className="flex bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-blue-400"
            key={index}
          >
            <img
              src={eachNews.image}
              alt="News Image"
              className="w-1/3 object-cover"
            />

            <div className="w-2/3 p-4 flex flex-col justify-between shadow-md shadow-blue-300">
              <h2 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[28px] sm:leading-[64px] text-[10px] leading-[46px] mt-5 mb-2 px-5">
                {eachNews.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                {eachNews.description}
              </p>
              <div className="mt-4 flex items-center justify-between px-5">
                <span className="bg-blue-500 text-white  text-xs font-medium mr-2 px-4 py-1 rounded">
                  {eachNews.views} views
                </span>
                {/* <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <ListCollapse />
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsList;

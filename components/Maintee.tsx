import React from "react";

const Maintee = () => {
  const mainteeIdeas = [
    {
      id: 1,
      name: "Iman Kadir",
      image: "/Art Card-1.png",
      title: "Electric Circuit Amplifying",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora ducimus debitis repellendus veniam repudiandae ea facilis reiciendis voluptatem. Quia sint atque ducimus quidem itaque at ea voluptatibus eaque possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis, voluptas, ipsa corrupti cumque eos nobis culpa deleniti suscipit recusandae ea unde omnis accusamus quod enim dolores, assumenda vitae? Rem.",
    },
    {
      id: 2,
      name: "Chaltu Siraj",
      image: "/Art Card-2.png",
      title: "Modern Chicken Farming",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora ducimus debitis repellendus veniam repudiandae ea facilis reiciendis voluptatem. Quia sint atque ducimus quidem itaque at ea voluptatibus eaque possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis, voluptas, ipsa corrupti cumque eos nobis culpa deleniti suscipit recusandae ea unde omnis accusamus quod enim dolores, assumenda vitae? Rem.",
    },
    {
      id: 3,
      name: "Roba Sagni",
      image: "/Art Card-3.png",
      title: "Business Automation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora ducimus debitis repellendus veniam repudiandae ea facilis reiciendis voluptatem. Quia sint atque ducimus quidem itaque at ea voluptatibus eaque possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis, voluptas, ipsa corrupti cumque eos nobis culpa deleniti suscipit recusandae ea unde omnis accusamus quod enim dolores, assumenda vitae? Rem.",
    },
  ];

  return (
    <div className="container mx-auto col-span-2">
      <h1 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[20px] sm:leading-[64px] text-[10px] leading-[46px] text-center">
        Maintee Ideas
      </h1>
      {mainteeIdeas.map((eachIdea, index) => (
        <div
          className="flex bg-white shadow-md rounded-2xl my-5 p-5
           overflow-hidden hover:shadow-lg hover:shadow-blue-400"
          key={index}
        >
          <img
            src={eachIdea.image}
            alt={"child" + index}
            className="w-auto object-cover"
          />
          <div className=" p-4 flex flex-col justify-between">
            <h2 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[20px]">
              {eachIdea.name}
            </h2>
            <h4 className="uppercase font-work-sans font-bold text-gray-800 sm:text-[15px]">
              {eachIdea.title}
            </h4>
            <p className="text-gray-600 mt-2 text-xs">{eachIdea.description}</p>
            <button className=" inline-block bg-blue-500 text-white rounded-xl">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Maintee;

import React from "react";

import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.png";
import image4 from "./Images/image4.png";
import image5 from "./Images/image5.png";
import image6 from "./Images/image6.png";
import image7 from "./Images/image7.png";

const MyLatestWork = () => {
  const images = [
    { id: 1, src: image1, link: "https://entetain-app.vercel.app/" },
    { id: 2, src: image2, link: "#" },
    { id: 3, src: image3, link: "https://insaagram.netlify.app/" },
    { id: 4, src: image4, link: "https://buble-game-nu.vercel.app/" },
    { id: 5, src: image5, link: "#" },
    {
      id: 6,
      src: image6,
      link: "https://monumental-panda-78810b.netlify.app/",
    },
  ];

  return (
    <div className="w-full h-full mt-12">
      <h1 className="lg:text-5xl text-4xl font-bold text-center">My Latest Work</h1>

      <div className="cards mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-full h-full p-[5%]">
        {images.map((item) => {
          return (
            <a href={item.link} target="_blank" key={item.id} rel="noopener noreferrer">
              <div
                className="card w-full h-[250px] sm:h-[270px] lg:h-[230px] shadow-md shadow-gray-400 rounded-xl bg-transparent px-5 py-6 space-y-3 transform hover:scale-[1.05] delay-200 transition-all hover:border-[4px] hover:border-pink-600"
                style={{
                  backgroundImage: `url(${item.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MyLatestWork;

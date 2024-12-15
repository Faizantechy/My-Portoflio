import React from "react";

const MyServices = () => {
  return (
    <div className="w-full h-full px-4 mt-[7rem] mx-auto">
      <h1 className="lg:text-5xl text-4xl font-bold text-center">My Services</h1>

      <div className="cards mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <div className="card w-full sm:h-[250px] lg:h-[300px] h-auto shadow-md shadow-gray-400 rounded-xl bg-transparent px-5 py-6 space-y-3 transform hover:scale-[1.05] delay-200 transition-all hover:bg-orange-950 hover:border-[4px] hover:border-pink-600">
          <span className="text-3xl font-bold">01</span>
          <h2
            className="text-3xl font-bold"
            style={{
              background: "linear-gradient(to right, purple, orange)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Web Design
          </h2>
          <p className="text-xl">
            Web development is the <br /> process of building, <br /> programming..
          </p>
          <button className="text-[22px] mt-2">
            Read More <i className="ri-arrow-right-fill"></i>
          </button>
        </div>

        <div className="card w-full sm:h-[250px] lg:h-[300px] h-auto shadow-md shadow-gray-400 rounded-xl bg-transparent px-5 py-6 space-y-3 transform hover:scale-[1.05] delay-200 transition-all hover:bg-orange-950 hover:border-[4px] hover:border-pink-600">
          <span className="text-3xl font-bold">02</span>
          <h2
            className="text-3xl font-bold"
            style={{
              background: "linear-gradient(to right, purple, orange)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SEO
          </h2>
          <p className="text-xl">
            SEO is the <br /> practice of improving, <br /> website visibility..
          </p>
          <button className="text-[22px] mt-2">
            Read More <i className="ri-arrow-right-fill"></i>
          </button>
        </div>

        <div className="card w-full sm:h-[250px] lg:h-[300px] h-auto shadow-md shadow-gray-400 rounded-xl bg-transparent px-5 py-6 space-y-3 transform hover:scale-[1.05] delay-200 transition-all hover:bg-orange-950 hover:border-[4px] hover:border-pink-600">
          <span className="text-3xl font-bold">03</span>
          <h2
            className="text-3xl font-bold"
            style={{
              background: "linear-gradient(to right, purple, orange)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Content Writing
          </h2>
          <p className="text-xl">
            Content writing is the <br /> process of creating, <br /> engaging
            articles..
          </p>
          <button className="text-[22px] mt-2">
            Read More <i className="ri-arrow-right-fill"></i>
          </button>
        </div>

        <div className="card w-full sm:h-[250px] lg:h-[300px] h-auto shadow-md shadow-gray-400 rounded-xl bg-transparent px-5 py-6 space-y-3 transform hover:scale-[1.05] delay-200 transition-all hover:bg-orange-950 hover:border-[4px] hover:border-pink-600">
          <span className="text-3xl font-bold">04</span>
          <h2
            className="text-3xl font-bold"
            style={{
              background: "linear-gradient(to right, purple, orange)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            React Developer
          </h2>
          <p className="text-xl">
            React development is the <br /> creation of dynamic, <br /> responsive
            applications..
          </p>
          <button className="text-[22px] mt-2">
            Read More <i className="ri-arrow-right-fill"></i>
          </button>
        </div>

        <div className="card w-full sm:h-[250px] lg:h-[300px] h-auto shadow-md shadow-gray-400 rounded-xl bg-transparent px-5 py-6 space-y-3 transform hover:scale-[1.05] delay-200 transition-all hover:bg-orange-950 hover:border-[4px] hover:border-pink-600">
          <span className="text-3xl font-bold">05</span>
          <h2
            className="text-3xl font-bold"
            style={{
              background: "linear-gradient(to right, purple, orange)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Social Media
          </h2>
          <p className="text-xl">
            Social media is the <br /> process of managing, <br /> digital
            communication..
          </p>
          <button className="text-[22px] mt-2">
            Read More <i className="ri-arrow-right-fill"></i>
          </button>
        </div>

        <div className="card w-full sm:h-[250px] lg:h-[300px] h-auto shadow-md shadow-gray-400 rounded-xl bg-transparent px-5 py-6 space-y-3 transform hover:scale-[1.05] delay-200 transition-all hover:bg-orange-950 hover:border-[4px] hover:border-pink-600">
          <span className="text-3xl font-bold">06</span>
          <h2
            className="text-3xl font-bold"
            style={{
              background: "linear-gradient(to right, purple, orange)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Copywriter
          </h2>
          <p className="text-xl">
            Copywriting is the <br /> art of crafting, <br /> persuasive
            messages..
          </p>
          <button className="text-[22px] mt-2">
            Read More <i className="ri-arrow-right-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyServices;

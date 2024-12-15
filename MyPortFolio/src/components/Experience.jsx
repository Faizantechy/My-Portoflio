import React from "react";

const Experience = () => {
  return (
    <div className="w-full h-full lg:mt-[9rem]  mt-[6rem] flex justify-evenly lg:px-4 lg:space-x-0 space-x-5 lg:mr-0 mr-7">
      <div
        className="sec1 text-center border-r-2 lg:px-0 px-3 border-white w-[180px] sm:w-[200px] lg:w-[300px] mb-6 lg:mb-0 hover:scale-[1.1] delay-200 transition-all"
      >
        <span
          className="text-3xl sm:text-3xl lg:text-5xl font-bold"
          style={{
            background: "linear-gradient(to right, purple, orange)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          3+
        </span>
        <p className="text-[15px] text-nowrap sm:text-sm lg:text-xl font-semibold">
          YEARS OF EXPERIENCE
        </p>
      </div>

      <div
        className="sec1 text-center border-r-2 lg:px-0 px-3 border-white w-[180px] sm:w-[200px] lg:w-[300px] mb-6 lg:mb-0 hover:scale-[1.1] delay-200"
      >
        <span
          className="text-3xl sm:text-3xl lg:text-5xl font-bold"
          style={{
            background: "linear-gradient(to right, purple, orange)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          52+
        </span>
        <p className="text-lg text-[15px] text-nowrap sm:text-sm lg:text-xl font-semibold">
          PROJECTS COMPLETED
        </p>
      </div>

      <div
        className="sec1 text-center lg:px-0 px-3 w-[180px] sm:w-[200px] lg:w-[300px] mb-6 lg:mb-0 hover:scale-[1.1] delay-200  relative right-5"
      >
        <span
          className="text-3xl sm:text-3xl lg:text-5xl font-bold "
          style={{
            background: "linear-gradient(to right, purple, orange)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Several
        </span>
        <p className="text-lg sm:text-sm lg:text-xl text-[15px] text-nowrap font-semibold">
          HAPPY CLIENTS
        </p>
      </div>
    </div>
  );
};

export default Experience;

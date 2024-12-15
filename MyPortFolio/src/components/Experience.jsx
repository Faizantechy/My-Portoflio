import React from "react";

const Experience = () => {
  return (
    <div className="w-full h-full lg:mt-[9rem] mt-[6rem] flex lg:justify-evenly justify-center lg:flex-row flex-col gap-8 items-center">
      <div
        className="sec1 text-center lg:px-0 px-3 w-[180px] sm:w-[200px] lg:w-[300px] mb-6 lg:mb-0 hover:scale-[1.1] delay-200 transition-all"
      >
        <span
          className="text-4xl sm:text-4xl lg:text-6xl font-bold"
          style={{
            background: "linear-gradient(to right, purple, orange)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          3+
        </span>
        <p className="text-[17px] sm:text-lg lg:text-xl font-semibold">
          YEARS OF EXPERIENCE
        </p>
      </div>

      <div
        className="sec1 text-center lg:px-0 px-3 w-[180px] sm:w-[200px] lg:w-[300px] mb-6 lg:mb-0 hover:scale-[1.1] delay-200"
      >
        <span
          className="text-4xl sm:text-4xl lg:text-6xl font-bold"
          style={{
            background: "linear-gradient(to right, purple, orange)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          52+
        </span>
        <p className="text-lg text-[17px] sm:text-lg lg:text-xl font-semibold">
          PROJECTS COMPLETED
        </p>
      </div>

      <div
        className="sec1 text-center lg:px-0 px-3 w-[180px] sm:w-[200px] lg:w-[300px] mb-6 lg:mb-0 hover:scale-[1.1] delay-200 ml-2"
      >
        <span
          className="text-4xl sm:text-4xl lg:text-6xl font-bold"
          style={{
            background: "linear-gradient(to right, purple, orange)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Several
        </span>
        <p className="text-lg sm:text-lg lg:text-xl text-[17px] text-nowrap font-semibold">
          HAPPY CLIENTS
        </p>
      </div>
    </div>
  );
};

export default Experience;

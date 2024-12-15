import React from "react";

const HeroSection = () => {
  return (
    <center>
      <div className="w-full h-full mt-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBhDluQM5tRWIOEUOxW3s4K5myBzIDbxrRA&s"
          alt=""
          className="rounded-full hover:scale-[95%] hover:border-4 border-pink-500 shadow-xl ml-[rem] hover:shadow-pink-400 flex-shrink-0 w-[250px]"
        />

        <div className="content w-full ">
          <h1 className="lg:text-5xl text-3xl font-bold mt-3 leading-[44px] ">
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
              I'm Alex Bennet
            </span>
            ,frontend <br /> developer based in USA
          </h1>

          <p className="mt-4 font-semibold lg:p-0 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            odit nesciunt <br />
            culpa ipsa ea officia enim blanditiis minima illo dolorem!
          </p>

          <div className="buttons space-x-5 mt-4">
            <button
              class="
primary-bg rounded-full px-7 py-3 hover:scale-[90%] text-white font-bold active:scale-[90%]"
            >
              Connect me
            </button>
            <button
              class="
hover:primary-bg rounded-full px-7 py-3 hover:scale-[90%] text-white font-bold active:scale-[90%] border-2 hover:bg-pink-400"
            >
              My Resume 
            </button>
          </div>
        </div>
      </div>
    </center>
  );
};

export default HeroSection;

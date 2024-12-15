import React from "react";

const About = () => {
  return (
    <div className="w-full h-full mt-[5rem] flex justify-center flex-col px-4 lg:px-0">
      <h1 className="text-7xl font-bold text-center">About Me</h1>

      <div className="main-container mt-10 flex justify-center items-center flex-col lg:flex-row">
        <div className="image-part w-full lg:w-[25%] flex justify-center mb-8 lg:mb-0">
          <img
            src="https://greatstack.in/portfolio/assets/about_profile-kNAyOvDL.svg"
            alt=""
            className="w-[300px]"
          />
        </div>
        <div className="content w-full lg:w-[60%] flex justify-start flex-col">
          <p className="text-xl">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth. <br />
            <br />
            My passion for frontend development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </p>

          <div className="experties flex gap-9 mt-10 items-start justify-start flex-col ">
            <div className="sec transform origin-top hover:scale-[90%] transition-all duration-300 rounded-full flex gap-12 items-center">
              <span className="text-xl">HTLML/CSS</span>

              <div className="lg:w-[400px] w-[300px] primary-bg rounded-xl h-[15px]"></div>
            </div>

            <div className="sec transform origin-top hover:scale-[90%] transition-all duration-300 flex gap-12">
              <span className="text-xl">BootStrap</span>

              <div className="lg:w-[400px] w-[300px]  primary-bg rounded-xl h-[15px]"></div>
            </div>

            <div className="sec transform origin-top hover:scale-[90%] transition-all duration-300 flex gap-12">
              <span className="text-xl">React</span>

              <div className="lg:w-[400px] w-[350px]  primary-bg rounded-xl h-[15px]"></div>
            </div>

            <div className="sec transform origin-top hover:scale-[90%] transition-all duration-300 flex gap-12">
              <span className="text-xl">Nextjs/NodJs</span>

              <div className="w-[300px] primary-bg rounded-xl h-[15px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

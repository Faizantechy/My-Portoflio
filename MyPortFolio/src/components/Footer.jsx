import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full m-[5%]">
        <footer className="flex flex-col lg:flex-row justify-between">
          <div className="part1 lg:w-[60%] mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold">AleX</h2>
            <p className="mt-3 font-semibold">
              I am a frontend developer from the USA with 10 years of <br />
              experience in companies like Microsoft, Tesla, and Apple.
            </p>
          </div>

          <div className="part2 flex flex-col lg:flex-row gap-3 items-center lg:w-[50%]">
            <div className="flex w-full gap-3 items-center">
              <div className="input-box  lg:w-[60%]  w-[55%] px-3 py-1 lg:px-5 lg:py-2 rounded-xl bg-gray-800 flex items-center">
                <i className="ri-user-6-line text-xl font-bold"></i>
                <input
                  type="email"
                  className="px-2 py-1 lg:px-4 lg:py-2 rounded-lg bg-gray-800 text-gray-500 w-full outline-none border-none"
                  placeholder="Enter your email"
                />
              </div>

              <div className="button">
                <button className="primary-bg rounded-full lg:px-7 px-4 py-3 hover:scale-[90%] text-white font-bold active:scale-[90%] mt-2 lg:mt-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>

        <div className="line w-[87%] mt-5 bg-white rounded-xl h-[3px]"></div>

        <div className="copyright flex flex-col lg:flex-row justify-evenly mt-4 w-full text-[17px] items-center lg:p-0 p-[5%] lg:space-x-5">
          <p className="text-semibold">© 2023 Alex Bennett. All rights reserved.</p>

          <div className="div list-none flex lg:flex-row flex-col lg:text-start text-center lg:space-y-0 space-y-7 mt-10 font-semibold  lg:mr-12 lg:space-x-5">

            <li className="hover:text-gray hover:scale-90 duration-75 delay-75">Term of Services</li>
            <li className="hover:text-gray hover:scale-90 duration-75 delay-75">Privacy Policy</li>
            <li className="hover:text-gray hover:scale-90 duration-75 delay-75">Connect with me</li>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

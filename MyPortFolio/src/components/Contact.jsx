import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-full mt-10 px-4">
      <h1 className="lg:text-5xl text-4xl font-bold text-center">Get In Touch</h1>

      <div className="contact-form w-full h-full p-[5%] flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0">
        <div className="part1 lg:px-5 w-full lg:w-[50%]">
          <h2
            style={{
              background: "linear-gradient(to right, purple, orange)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="lg:text-5xl text-4xl font-bold lg:mt-0 mt-8"
          >
            Let's Talk
          </h2>

          <p className="mt-3 text-[18px]">
            I'm currently available to take on new projects, so feel free to{" "}
            <br /> send me a message about anything that you want me to <br />{" "}
            work on. You can contact me anytime.
          </p>

          <div className="spans mt-5 text-xl font-semibold space-y-4">
            <span className="flex gap-4">
              {" "}
              <i className="ri-message-fill text-[22px] font-bold block"></i>{" "}
              faizanearmaan3@gmail.com
            </span>
            <span className="flex gap-4">
              {" "}
              <i className="ri-phone-line text-[22px] font-bold block"></i>{" "}
              03103795773
            </span>
            <span className="flex gap-4">
              {" "}
              <i className="ri-map-pin-line fill text-[22px] font-bold block"></i>{" "}
              Pakistan/Karachi
            </span>
          </div>
        </div>

        <div className="part2 w-full lg:w-[50%] text-gray-400">
          <form className="flex flex-col space-y-4">
            <span className="text-xl font-semibold">Your Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 outline-pink-400"
            />
            <span className="text-xl font-semibold">Your Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 outline-pink-400"
            />
            <span className="text-xl font-semibold">Write your Message</span>
            <textarea
              name=""
              id=""
              className="w-full h-[200px] border-none outline-none rounded-lg bg-gray-800 px-5 py-4 active:outline-pink-400"
              placeholder="Enter your message.."
            ></textarea>

            <div className="button">
              <button
                className="primary-bg rounded-full mt-5 px-7 py-3 hover:scale-[90%] text-white font-bold active:scale-[90%]"
              >
                Connect me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./style.css";

const About = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold w-[80%] mx-auto text-center text-[#330523] my-8 ">
        Become digitally better with our continuous delivery improvement model
      </h1>
      <div className="w-[450px] mx-auto flex justify-between items-center  my-16">
        <div className="bg-[#00FFFF] text-xl w-[200px] text-center cursor-pointer  py-2 corner-style">
          <a href="https://www.linkedin.com/in/minhajmunna00" target="_blank">
            Find out more
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/minhajmunna00"
          target="_blank"
          className=" text-xl hover:text-[#FF0044] cursor-pointer"
        >
          Book a discovery call{" "}
          <span className="text-[#FF0044] font-bold">></span>
        </a>
      </div>

      {/* card */}

      <div className="grid grid-cols-3  lg:w-[80%] mx-auto">
        <div className=" flex flex-col justify-center w-[22rem] h-[23.5rem] border border-[#FF0044] rounded-md hover:bg-[#FF0044] text-center text-[#330523] hover:text-[#EEEEEE] cursor-pointer">
          <h3 className="text-2xl mb-8">Strategic Consultancy</h3>
          <p className="text-lg">
            Achieve digital maturity by aligning your business vision with
            digital strategy and delivery
          </p>
        </div>
        <div className=" flex flex-col justify-center w-[22rem] h-[23.5rem] border border-[#FF0044] rounded-md hover:bg-[#FF0044] text-center text-[#330523] hover:text-[#EEEEEE] cursor-pointer">
          <h3 className="text-2xl mb-8">Digital Product Delivery</h3>
          <p className="text-lg">
            Design and build your digital products faster while improving the
            return on your digital investment
          </p>
        </div>
        <div className=" flex flex-col justify-center w-[22rem] h-[23.5rem] border border-[#FF0044] rounded-md hover:bg-[#FF0044] text-center text-[#330523] hover:text-[#EEEEEE] cursor-pointer">
          <h3 className="text-2xl mb-8">Engineering & Tech</h3>
          <p className="text-lg">
            Augment your internal web engineering capacity and capability
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:w-[50%] mx-auto mt-10">
        <div className=" flex flex-col justify-center w-[22rem] h-[23.5rem] border border-[#FF0044] rounded-md hover:bg-[#FF0044] text-center text-[#330523] hover:text-[#EEEEEE] cursor-pointer">
          <h3 className="text-2xl mb-8">UX Design</h3>
          <p className="text-lg">
            Know your customers in and out to offer them the best-in-class
            digital experience
          </p>
        </div>
        <div className=" flex flex-col justify-center w-[22rem] h-[23.5rem] border border-[#FF0044] rounded-md hover:bg-[#FF0044] text-center text-[#330523] hover:text-[#EEEEEE] cursor-pointer">
          <h3 className="text-2xl mb-8">Cloud Services</h3>
          <p className="text-lg">
            Discover the power of connected, composable and sustainable digital
            solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

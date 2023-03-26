import React from "react";
import banner from "../../../assets/img/banner.png";
import bannerImage1 from "../../../assets/img/banner-image1.png";
import bannerImage2 from "../../../assets/img/banner-image2.png";
import bannerImage3 from "../../../assets/img/banner-image3.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] via-[#2A1023] to-[#2A1023] text-[#FFFFFF] mt-32">
      <div className="flex">
        <div className="w-[50%] bg-[#FF0044] pl-32 pt-36">
          <h1 className="text-7xl font-bold">We are the</h1>
          <h1 className="text-7xl font-bold">digital change</h1>
          <h1 className="text-7xl font-bold">makers</h1>
          <p className="w-[500px] my-10 text-xl">
            We build platforms and partnerships that empower businesses to
            realise digital value, faster.
          </p>
          <div className="w-[450px] flex items-center my-16">
            <div className="bg-[#00FFFF] text-[#2A1023] text-xl w-[150px] text-center cursor-pointer rounded-md py-2 banner-corner-style">
              <a
                href="https://www.linkedin.com/in/minhajmunna00"
                target="_blank"
              >
                About Us
              </a>
            </div>
            <a
              href="https://www.linkedin.com/in/minhajmunna00"
              target="_blank"
              className=" text-xl hover:text-[#2A1023] cursor-pointer ml-8"
            >
              Our Services
              <span className="font-bold text-[#2A1023] ml-3">></span>
            </a>
          </div>
        </div>
        <div className="w-[50%]">
          <img className="w-[]" src={banner} alt="" />
        </div>
      </div>
      <div className="flex justify-around py-10">
        <img className="w-[200px] h-[150px]" src={bannerImage1} alt="" />
        <img className="w-[600px] h-[150px]" src={bannerImage2} alt="" />
        <img className="w-[200px] h-[150px]" src={bannerImage3} alt="" />
      </div>
    </div>
  );
};

export default Banner;

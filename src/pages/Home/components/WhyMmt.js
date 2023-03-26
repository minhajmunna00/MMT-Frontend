import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../../../assets/img/white-arrows.png";
import icon2 from "../../../assets/img/icon-2.png";
import icon3 from "../../../assets/img/icon-3_1.png";
import icon4 from "../../../assets/img/icon-4_1.png";
import icon5 from "../../../assets/img/icon-5.png";
import icon6 from "../../../assets/img/icon-6.png";
import client1 from "../../../assets/img/Logos__Plum_-23.png";
import client2 from "../../../assets/img/Logos__Plum_-24.png";
import client3 from "../../../assets/img/clients1.png";
import client4 from "../../../assets/img/Logos__Plum_-27.png";
import client5 from "../../../assets/img/Logos__Plum_-26.png";
import client6 from "../../../assets/img/Logos__Plum_-25.png";
import client7 from "../../../assets/img/Logos__Plum_-19.png";
import client8 from "../../../assets/img/Logos__Plum_-20.png";

const WhyMmt = () => {
  return (
    <div className="bg-[#00FFFF] py-16">
      <h1 className="text-7xl font-bold text-center">Why MMT?</h1>

      <div className="flex justify-between my-8 w-[75%] mx-auto">
        <div className="w-[30%] text-2xl">
          <p>
            We can help you boost your delivery capability through specialist
            team augmentation. By forming a single, fully integrated team across
            your organisation, we can help you go beyond the boundaries of
            in-housing.
          </p>{" "}
          <br />
          <p>
            Our trusted one-team culture model has enabled us to deliver a
            number of key initiatives for our clients, from launching new
            products and services, building a new digital infrastructure and
            rolling out agile methodologies at scale to revolutionise the
            customer experience with emerging technologies.
          </p>{" "}
          <br />
          <p>Find out more about our Engineering and Technology services.</p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-8">
            <div className="pl-6 pt-8 w-[18rem] h-[14rem] border border-[#FF0044] rounded-md bg-[#FF0044]  text-[#EEEEEE] cursor-pointer font-semibold">
              <img src={icon1} className="w-[20%]" alt="" />
              <h3 className="text-xl w-[200px] mt-6">
                Optimise your engineering capacity
              </h3>
            </div>
            <div className="pl-6 pt-8 w-[18rem] h-[14rem] border border-[#FF0044] rounded-md hover:bg-[#FF0044] text-[#330523] hover:text-[#EEEEEE] cursor-pointer font-semibold">
              <img src={icon2} className="w-[20%]" alt="" />
              <h3 className="text-xl w-[200px] mt-6">
                Increase ROL on your digital investments
              </h3>
            </div>
            <div className="pl-6 pt-8 w-[18rem] h-[14rem] border border-[#FF0044] rounded-md hover:bg-[#FF0044] text-[#330523] hover:text-[#EEEEEE] cursor-pointer font-semibold">
              <img src={icon3} className="w-[20%]" alt="" />
              <h3 className="text-xl w-[200px] mt-6">
                Improve digital customer experience
              </h3>
            </div>
            <div className="pl-6 pt-8 w-[18rem] h-[14rem] border border-[#FF0044] rounded-md hover:bg-[#FF0044] text-[#330523] hover:text-[#EEEEEE] cursor-pointer font-semibold">
              <img src={icon4} className="w-[20%]" alt="" />
              <h3 className="text-xl w-[200px] mt-6">
                Increase speed to market
              </h3>
            </div>
            <div className="pl-6 pt-8 w-[18rem] h-[14rem] border border-[#FF0044] rounded-md hover:bg-[#FF0044] text-[#330523] hover:text-[#EEEEEE] cursor-pointer font-semibold">
              <img src={icon5} className="w-[20%]" alt="" />
              <h3 className="text-xl w-[200px] mt-6">
                Achieve digital sustainability targets
              </h3>
            </div>
            <div className="pl-6 pt-8 w-[18rem] h-[14rem] border border-[#FF0044] rounded-md hover:bg-[#FF0044] text-[#330523] hover:text-[#EEEEEE] cursor-pointer font-semibold">
              <img src={icon6} className="w-[20%]" alt="" />
              <h3 className="text-xl w-[200px] mt-6">
                Reduce the cost of legacy Technology
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* client section */}
      <div>
        <h1 className="text-center text-4xl font-bold my-20">OUR CLIENTS</h1>
        <div className="my-10">
          <Slider
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={1000}
            pauseOnFocus={false}
            pauseOnHover={false}
          >
            <img src={client1} className="w-[100px]" alt="" />
            <img src={client2} className="w-[100px]" alt="" />
            <img src={client3} className="w-[100px]" alt="" />
            <img src={client4} className="w-[100px]" alt="" />
            <img src={client5} className="w-[100px]" alt="" />
            <img src={client6} className="w-[100px]" alt="" />
            <img src={client7} className="w-[100px]" alt="" />
            <img src={client8} className="w-[100px]" alt="" />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WhyMmt;

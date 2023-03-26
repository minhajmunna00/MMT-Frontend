import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partner1 from "../../../assets/img/partner1.png";
import partner2 from "../../../assets/img/Logos_28.png";
import partner3 from "../../../assets/img/Logos_30.png";
import partner4 from "../../../assets/img/Logos_31.png";
import partner5 from "../../../assets/img/Logos_32.png";
import partner6 from "../../../assets/img/Logos_33.png";
import partner7 from "../../../assets/img/Logos_34.png";

const Partner = () => {
  return (
    <div className="my-10">
      <h1 className="text-5xl text-center font-semibold">Our Partners</h1>
      <div className="my-10">
        <Slider
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={1000}
          pauseOnFocus={false}
          pauseOnHover={false}
        >
          <img src={partner1} className="w-[200px]" alt="" />
          <img src={partner2} className="w-[200px]" alt="" />
          <img src={partner3} className="w-[200px]" alt="" />
          <img src={partner4} className="w-[200px]" alt="" />
          <img src={partner5} className="w-[200px]" alt="" />
          <img src={partner6} className="w-[200px]" alt="" />
          <img src={partner7} className="w-[200px]" alt="" />
        </Slider>
      </div>
    </div>
  );
};

export default Partner;

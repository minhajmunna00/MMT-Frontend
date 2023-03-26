import React from "react";
import logo from "../../assets/img/logo-footer.png";
import foterImage1 from "../../assets/img/footer1.png";
import foterImage2 from "../../assets/img/footer2.png";
import foterImage3 from "../../assets/img/footer3.png";
import foterImage4 from "../../assets/img/footer4.png";

const Footer = () => {
  return (
    <div className="text-[#FFFFFF]">
      <div className="bg-[#FF0044] flex px-8 py-14">
        <div className="w-[50%]">
          <img src={logo} alt="" />
          <h1 className="text-6xl font-bold mt-10">We are the digital</h1>
          <h2 className="text-5xl font-medium my-5">change makers.</h2>
          <p className="text-2xl font-medium mt-8">Stay up-to-date with the</p>
          <p className="text-2xl font-medium">latest news and insights.</p>

          <div className="bg-[#00FFFF] text-black text-xl w-[150px] text-center cursor-pointer rounded-md py-2 footer-corner-style mt-8 mb-5">
            <a href="https://www.linkedin.com/in/minhajmunna00" target="_blank">
              Sign up
            </a>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="flex">
            <div className="w-1/2"></div>
            <div className="w-1/2 flex justify-between">
              <div className="flex flex-col">
                <p className="text-lg mb-5 hover:text-[#330523] cursor-pointer inline-block">
                  About
                </p>
                <p className="text-lg mb-5 hover:text-[#330523] cursor-pointer inline-block">
                  Services
                </p>
                <p className="text-lg mb-5 hover:text-[#330523] cursor-pointer inline-block">
                  Clients
                </p>
                <p className="text-lg mb-5 hover:text-[#330523] cursor-pointer inline-block">
                  Insights
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-lg mb-5 hover:text-[#330523] cursor-pointer inline-block">
                  Events
                </p>
                <p className="text-lg mb-5 hover:text-[#330523] cursor-pointer inline-block">
                  Careers
                </p>
                <p className="text-lg mb-5 hover:text-[#330523] cursor-pointer inline-block">
                  Contact
                </p>
              </div>
              <div>
                <p className="text-xl mb-5 ">Follow Us</p>
                <div>
                  <a
                    href="https://www.linkedin.com/in/minhajmunna00"
                    target="_blank"
                  >
                    <i class="fa-brands fa-twitter icon-size"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/minhajmunna00"
                    target="_blank"
                  >
                    <i class="fa-brands fa-linkedin icon-size ml-4"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/minhajmunna00"
                    target="_blank"
                  >
                    <i class="fa-brands fa-square-facebook icon-size ml-4"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-20">
              <img src={foterImage1} className="w-[50px] h-[80px]" alt="" />
              <img src={foterImage2} className="w-[150px] h-[80px]" alt="" />
              <img src={foterImage3} className="w-[250px] h-[80px]" alt="" />
              <img src={foterImage4} className="w-[150px] h-[80px]" alt="" />
            </div>
            <p className="text-justify text-sm mt-4">
              Part of MSQ Partners, we are one of the first groups of our size
              to be carbon negative. We are one of fewer than 1,100 companies
              worldwide who have set Science Based Targets to limit warming to
              1.5oC. A critical step on our path to Net Zero. Every project we
              scope includes the carbon emission totals that will be created and
              a strategy detailing how we’ll offset them.
            </p>
          </div>
        </div>
      </div>

      {/* subfooter */}
      <div className="bg-[#330523] flex justify-between px-8 py-5">
        <p>Copyright MMT 2023</p>
        <p>
          Our website is designed with sustainability and the environment at its
          heart. Hosted on a server powered by 100% renewable energy.
        </p>
        <div className="flex">
          <p>Sitemap</p>
          <p className="ml-3">Privacy</p>
          <p className="ml-3">Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

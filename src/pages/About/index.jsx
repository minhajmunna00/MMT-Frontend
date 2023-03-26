import React from "react";

const About = () => {
  return (
    <div className="mt-32 text-[#FFFFFF]">
      <div className="w-[100%] flex">
        <div className="w-[70%] bg-[#330523] flex py-16">
          <div className="w-[50%] px-16 border-r-2 border-red-600">
            <p className="text-[#FF0044] text-lg font-bold">ABOUT</p>
            <div className="mt-4 hover:text-[#00FFFF]">
              <h1 className="text-6xl font-bold">Why use</h1>
              <h1 className="text-6xl font-bold">MMT for</h1>
              <h1 className="text-6xl font-bold">your digital</h1>
              <h1 className="text-6xl font-bold">optimisation</h1>
              <h1 className="text-6xl font-bold">?</h1>
            </div>
          </div>
          <div className="w-[50%] px-16">
            <p className="text-[#FF0044] text-lg font-bold">ABOUT</p>
            <h1 className="my-6 text-3xl font-bold hover:text-[#00FFFF]">
              Meet the team
            </h1>
            <p className="text-xl">
              Meet our founders, the executive team and the whole 250+ strong
              MMT family.
            </p>
            <p className="text-[#FF0044] text-lg font-bold mt-8">
              SUSTAINABILITY
            </p>
            <h1 className="my-6 text-3xl font-bold hover:text-[#00FFFF]">
              Our sustainability journey
            </h1>
            <p className="text-xl">
              In 2020 we became a carbon negative company, and we've pledged to
              halve our carbon footprint by 2024.
            </p>
          </div>
        </div>
        <div className="w-[30%] bg-[#FF0044] flex items-center p-16">
          <div>
            <h1 className="text-4xl font-bold">We are the digital</h1>
            <h1 className="text-4xl font-bold">change makers</h1>
            <p className="my-10 text-xl">
              Stay up-to-date with the latest news and insights.
            </p>
            <a
              href="https://www.linkedin.com/in/minhajmunna00"
              target="_blank"
              className="bg-[#00FFFF] text-black px-8 py-2 rounded-lg"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

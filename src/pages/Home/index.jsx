import React from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Events from "./components/Events";
import KnowMore from "./components/KnowMore";
import Partner from "./components/Partner";
import Sustainability from "./components/Sustainability";
import WhyMmt from "./components/WhyMmt";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Partner />
      <WhyMmt />
      <Sustainability />
      <Events />
      <KnowMore />
    </div>
  );
};

export default Home;

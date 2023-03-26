import React, { useEffect, useState } from "react";
import eventPhoto1 from "../../../assets/img/event-photo1.png";
import eventPhoto2 from "../../../assets/img/card-2.png";
import eventPhoto3 from "../../../assets/img/card3.png";
import eventPhoto4 from "../../../assets/img/card4.png";
import axios from "axios";

const Events = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://mmt-backend.onrender.com/api/mmt/posts", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <div className="bg-[#330523] px-14 py-14">
      <h1 className="text-white text-7xl font-bold mb-4">Insight</h1>
      <h1 className="text-white text-7xl font-bold mb-14">& Events</h1>
      <div>
        <h3 className="text-white text-xl font-bold">RECENT POSTS</h3>
        <div className=" grid grid-cols-4 gap-4 my-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="card w-90 h-[500px] bg-base-100 shadow-xl cursor-pointer"
            >
              <figure>
                <img src={item.image} className="w-[100]" alt="Shoes" />
              </figure>
              <div className="card-body">
                <div className="">
                  {item.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="badge border-none  bg-[#FF0044] text-lg px-4 py-4 mr-2"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <h2 className="card-title text-[#330523] mt-4">
                  {item.description}
                </h2>

                <div className="mt-10 text-2xl text-[#330523]">
                  <h2>{item.date}</h2>
                  <h2>{item.organization}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

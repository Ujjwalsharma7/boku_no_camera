import React from "react";

import banner from "../assets/banner.jpg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      className=" w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container mx-auto h-full relative">
        {/* text and image wrapper */}
        <div className="flex flex-col justify-center ">
          {/* text  */}
          <div className="w-full pt-52 pb-14 lg:pt-0 lg-pb-0 lg:w-auto z-10  flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1 lg:text-[108px]">
              Photographer <br /> & Editor
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 ">
              Shimla, Himachal
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Let's Connect
            </Link>
          </div>
          {/* image  */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative right-0 lg:right-[-10rem] overflow-hidden">
              <img src={banner} className="w-96 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

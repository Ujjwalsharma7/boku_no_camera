import React from "react";

import banner from "../assets/banner3.jpg";
import banner2 from "../assets/banner2.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex w-full h-[100vh]">
      <img
        className="fixed top-0 -z-10 left-0 flex object-cover h-screen w-full opacity-0 md:opacity-70"
        src={banner}
      />
      <img
        className="md:hidden fixed top-0 -z-10 left-0 flex object-cover h-screen w-full opacity-70"
        src={banner2}
      />
      <section className="min-h-screen min-w-screen">
        <div className="container mx-auto h-full relative">
          {/* text and image wrapper */}
          <div className="flex flex-col mt-12 md:mt-0 ml-4">
            {/* text  */}
            <div className="w-full pt-1 md:pt-1 pb-14 lg:pt-0 lg-pb-0 lg:w-auto z-10  flex flex-col lg:items-start space-y-10 md:space-y-4">
              <h1 className="h1 lg:text-[108px]">
                Photographer <br /> & Editor
              </h1>
              <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 font-semibold">
                Shimla, Himachal
              </p>
              <Link to={"/contact"} className="btn mb-[30px]">
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

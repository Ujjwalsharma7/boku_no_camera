import React from "react";

import banner from "../assets/banner.png";

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        {/* text and image wrapper */}
        <div className="flex flex-col justify-center ">
          {/* text  */}
          <div className="w-full pt-36 pb-14 lg:pt-0 lg-pb-0 lg:w-auto z-10  flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1  lg:text-[108px]">
              Photographer <br /> & Editor
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

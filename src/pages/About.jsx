import React from "react";
import { Link } from 'react-router-dom';

import demo from '../assets/demo.png'

const About = () => {
  return <section className="section">
    <div className="container mx-auto h-full relative">
      {/* text and image wrapper */}
      <div className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
        {/* image  */}
        <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden ">
          <img src={demo} alt="" />
        </div>
        {/* text  */}
        <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
          <h1 className="h1">About me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eveniet et soluta, sit, possimus vel pariatur omnis fugiat vero natus unde rerum mollitia porro molestiae.</p>
          <br />
          <br />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis veritatis hic illo ipsa itaque saepe fuga eum dolor quibusdam ipsum.</p>
        </div>
      </div>

    </div>
  </section>;
};

export default About;

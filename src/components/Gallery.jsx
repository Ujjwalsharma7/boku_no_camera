import React, { useState } from "react";

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

import { AiOutlineClose } from "react-icons/ai";

const Gallery = () => {
  let data = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
  ];

  const [model, setModel] = useState(false);

  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (img) => {
    setTempImgSrc(img);
    setModel(true);
  };

  return (
    <>
      <div
        className={
          model
            ? " w-full h-screen fixed top-0 left-0 flex justify-center items-center visible overflow-hidden z-50 bg-black opacity-100 "
            : "hidden opacity-0"
        }
      >
        <img
          src={tempimgSrc}
          className="w-auto max-w-full h-auto block leading-3 box-border pt-20 pr-0 pb-20 pl-0 max-h-full my-0 mx-auto"
        />
        <AiOutlineClose
          className=" fixed top-10 right-10 w-24 h-24 p-5 text-white"
          onClick={() => setModel(false)}
        />
      </div>
      <div className=" lg:columns-3 md:columns-2 columns-1 px-12 py-5s">
        {data.map((item, index) => {
          return (
            <div
              className=" mb-2 transition-all duration-350 ease-in cursor-pointer hover:opacity-80"
              key={index}
              onClick={() => getImg(item.img)}
            >
              <img src={item.img} className=" w-full " />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;

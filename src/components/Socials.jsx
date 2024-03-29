import React from "react";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div className="hidden md:flex ml-24">
      <ul className="flex gap-x-8">
        <li>
          <a href="" target="_blank">
            <AiFillInstagram size="1.5rem" className=" text-black" />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <AiFillLinkedin size="1.5rem " className=" text-black" />
          </a>
        </li>
        <li>
          <a href="" target="_blank" className="h-10 w-10 text-black">
            <AiFillTwitterCircle size="1.5rem" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

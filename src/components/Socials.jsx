import React from "react";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-8">
        <li>
          <a href="" target="_blank">
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <AiFillTwitterCircle />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

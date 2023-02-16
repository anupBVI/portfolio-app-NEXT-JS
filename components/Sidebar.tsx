import Image from "next/image";
import styled from "styled-components";

import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Test = styled.h2`
  color: red;
  font-size: 10px;
`;

const Sidebar = () => {
  return (
    <div>
      <Test> Styled Components Test</Test>
      <></>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
        alt="avatar image"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-3 text-3xl font-medium tracking-wider font-kaushan">
        <span>Your </span>
        Name
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-300 rounded-full">Web Developer</p>

      <a
        href=""
        download={"name"}
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-300 rounded-full"
      >
        {" "}
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* Social Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="">
          <AiFillYoutube className="cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="cursor-pointer" />
        </a>
      </div>
      {/* Address  */}
      <div
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        className="py-4 my-5 bg-gray-200"
      >
        <div className="flex items-center justify-center space-x-2 ">
          <GoLocation />
          <span >Mumbai, Maharashtra</span>
        </div>
        <p className="my-2">anup.manwatkar@brainvire.com</p>
        <p className="my-2">9349492139 / 9347372987</p>
      </div>

      {/* Buttons    */}
      {/* Email Button */}
      <button onClick={()=>window.open('mailto:devam@gmail.com')} className="w-8/12 py-2 my-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 focus:outline-none">Email Me</button>
      {/* Toggle UI */}
      <button className="w-8/12 py-2 my-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400">Light UI</button>
    </div>
  );
};

export default Sidebar;

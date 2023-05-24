import React from "react";
import logo from "../assets/logo.png";
import { BiWorld } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="border-b sticky top-0 z-50 bg-white">
      <div className=" flex items-center  justify-between sm:mx-6 md:mx-10 lg:mx-12">
        {/* Left */}
        <div className=" h-20 flex items-center">
          <img src={logo} className="object-cover h-10 " />
        </div>
        {/* Middle  */}
        <div className=" hidden lg:flex relative shadow-sm shadow-gray-400 border rounded-full outline-0 items-center justify-center">
          <input type="search" className="py-2.5 w-[20rem] rounded-full" />
          <div className="absolute flex justify-between w-full pr-16 pl-6 font-semibold text-gray-600">
            <button className="w-full">Place</button>
            <button className="border-1 border-x px-6">Time</button>
            <button className="w-full text-gray-600/60 pl-2">Group Size</button>
          </div>
          <div className="bg-[#ff385c] p-2 rounded-full mr-2">
            <FiSearch className="text-white" />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center pr-3 font-semibold text-gray-600">
          <p className="text-[17px]">Rent House</p>
          <div className="flex items-center mx-8 gap-1 ">
            <BiWorld className=" " />
            <div className="">EN</div>
          </div>

          <div className="flex items-center gap-2 border px-2 py-2 rounded-full bg-[#ff385c] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#fb879c] duration-100 ease-out">
            <p>Sign in</p>
            <AiOutlineUser className="text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

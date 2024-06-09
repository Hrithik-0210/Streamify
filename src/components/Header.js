import React from "react";
import logo from "../images/YouTube_Logo_2017.svg.png";
import { CiSearch } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { BiSolidMicrophone } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/menuBarSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    console.log("dispatched");
    dispatch(toggleMenu());
  };

  return (
    // Header-Container
    <div className="flex  px-5 py-2 justify-between items-center">
      {/* Left-side-Container - logo */}
      <div className="flex  items-center justify-between">
        <div>
          <HiBars3
            className="w-6 h-6 mx-3 cursor-pointer"
            onClick={() => toggleMenuHandler()}
          />
        </div>
        <div className="relative pr-2">
          <img src={logo} alt="logo" className="w-[5.5rem] h-5 rounded mx-2" />
          <p className="absolute right-0 -top-1   font-sans text-[10px]">IN</p>
        </div>
      </div>

      {/* Middle-Container - search*/}
      <div className=" w-1/3  md:w-1/2 flex ">
        <form className="searchBox-Container w-full">
          <div className="">
            <input
              type="search"
              placeholder="Search"
              className="w-full py-2 px-4 rounded-l-full  focus:outline-none font-sans text-sm border border-gray-400"
            />
          </div>
        </form>
        <div className="flex items-center justify-center py-1 px-4 bg-gray-100 rounded-e-full border border-gray-400 border-l-0">
          <button>
            <CiSearch className="w-5 h-5" />
          </button>
        </div>

        <div className="microphone-icon bg-gray-100 flex items-center mx-3 rounded-full p-2">
          <BiSolidMicrophone className="w-5 h-5" />
        </div>
      </div>

      {/* Right-side-Container - userinfo*/}
      <div className="User-info-container flex  items-center justify-between w-28 md:w-32 lg:w-32 p-1">
        <div className="create-icon py-[0.35rem] px-2 rounded-full hover:bg-gray-200">
          <RiVideoAddLine className="w-5 h-5" />
        </div>
        <div className="notification-icon py-[0.3rem] px-[0.5rem] rounded-full hover:bg-gray-200">
          <IoMdNotificationsOutline className="w-5 h-5" />
        </div>
        <div className="user-icon py-[0.35rem] px-[0.6rem] rounded-full hover:bg-gray-200">
          <FaUserAlt className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;

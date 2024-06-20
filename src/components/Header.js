import React, { useEffect, useState } from "react";
import logo from "../images/YouTube_Logo_2017.svg.png";
import { CiSearch } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { BiSolidMicrophone } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/menuBarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";
import store from "../utils/store";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  console.log(searchQuery);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  /**
   * searchCache   = {
   *  "iphone":["iphone 11" , "iphone 14"]
   * }
   * searchQuery = iphone
   *
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        showSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const showSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await data.json();
    setSuggestion(jsonData[1]);
    dispatch(
      cacheResults({
        [searchQuery]: jsonData[1],
      })
    );
    console.log(jsonData[1]);
  };

  const toggleMenuHandler = () => {
    // console.log("dispatched");
    dispatch(toggleMenu());
  };

  return (
    // Header-Container
    <div className="flex  px-5 py-2 justify-between items-center w-full h-16 fixed top-0 left-0 z-50 bg-white ">
      {/* Left-side-Container - logo */}
      <div className="flex  items-center justify-between">
        <div>
          <HiBars3
            className="w-6 h-6 mx-3 cursor-pointer"
            onClick={() => toggleMenuHandler()}
          />
        </div>
        <div className="relative pr-2">
          <img src={logo} alt="logo" className="w-20 h-[1.1rem] rounded mx-2" />
          <p className="absolute right-0 -top-1   font-sans text-[10px]">IN</p>
        </div>
      </div>

      {/* Middle-Container - search*/}
      <div className=" w-1/3  md:w-[40%]  flex flex-col">
        <div className=" w-full   flex ">
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            className="w-full py-2 px-4 rounded-l-full  focus:outline-none font-sans text-sm border border-gray-400"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />

          <div className="flex items-center justify-center py-1 px-4 bg-gray-100 rounded-e-full border border-gray-400 border-l-0">
            <button>
              <CiSearch className="w-5 h-5" />
            </button>
          </div>

          <div className="microphone-icon bg-gray-100 flex items-center mx-3 rounded-full p-2">
            <BiSolidMicrophone className="w-5 h-5" />
          </div>
        </div>
        {showSuggestion &&
          (suggestion.length === 0 ? (
            " "
          ) : (
            <div className="absolute top-[3.2rem] bg-white w-1/3   py-2 shadow-md shadow-gray-300 borderborder-gray-200 rounded-2xl">
              <ul>
                {suggestion.map((suggest, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 hover:bg-gray-200 px-4 py-[0.30rem] border-2 "
                    onClick={() => setSearchQuery()}
                  >
                    <CiSearch className="w-4 h-4" />
                    <p className="text-sm font-medium">{suggest}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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

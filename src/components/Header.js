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
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import logo_dark from "../images/youtube -dark-theme-logo.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  /**
   * searchCache   = {
   *  "iphone":["iphone 11" , "iphone 14"]
   * }
   * searchQuery = iphone
   *
   */
  const showSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await data.json();
    setSuggestions(jsonData[1]);
    dispatch(
      cacheResults({
        [searchQuery]: jsonData[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        showSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const themeChange = (e) => {
    if (e === "dark") {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  const onClickSuggestion = (e) => {
    const suggestiontext = e.target.innerText.split(" ").join("+");
    setSearchQuery(e.target.innerText);
    setShowSuggestion(true);
    navigate("/results?search_query=" + suggestiontext);
  };

  // console.log(suggestions);
  return (
    // Header-Container
    <div className="flex  justify-between lg:px-5 xl:px-5 2xl:px-5 py-2  items-center w-full h-16 fixed top-0 left-0 z-50  bg-white dark:bg-black dark:text-white sm:px-2">
      {/* Left-side-Container - logo */}
      <div className="flex  items-center justify-between ">
        <div>
          <HiBars3
            className="w-6 h-6 mx-3 cursor-pointer sm:mx-0 sm:w-5 sm:h-5 md:mx-1 md:w-5 md:h-5"
            onClick={() => toggleMenuHandler()}
          />
        </div>
        <div className="relative pr-2">
          {themeMode === "light" ? (
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo"
                className="w-20 h-[1.1rem] rounded mx-2 sm:w-16 sm:h-4 md:w-16 md:h-4"
              />
            </Link>
          ) : (
            <Link to={"/"}>
              <img
                src={logo_dark}
                alt="logo"
                className="w-20 h-[1.6rem] rounded mx-2 sm:w-16 sm:h-4  md:w-16 md:h-4 "
              />
            </Link>
          )}
          <p className="absolute right-0 -top-1   font-sans text-[10px]">IN</p>
        </div>
      </div>
      {/* Middle-Container - search*/}
      <div className=" w-1/3  md:w-[40%]  flex  justify-center sm:h-7  md:h-7">
        <div className=" w-full   flex ">
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            className="w-full py-2 px-4 rounded-l-full  focus:outline-none font-sans text-sm border border-gray-400 dark:bg-black dark:text-white dark:border-gray-700"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <Link to={"/results?search_query=" + searchQuery}>
          <div className="flex items-center justify-center py-2 px-4 bg-gray-100 rounded-e-full border  border-l-0 dark:bg-black dark:border-gray-700 sm:h-7 sm:px-2 md:h-7 md:px-2">
            <button>
              <CiSearch className="w-5 h-5" />
            </button>
          </div>
        </Link>

        <div className="microphone-icon bg-gray-100 flex items-center mx-3 rounded-full p-2 dark:bg-gray-800 sm:hidden">
          <BiSolidMicrophone className="w-5 h-5 dark:text-gray-100" />
        </div>
      </div>
      {/* //suggestion box */}
      <div className="absolute top-[3.15rem] sm:left-10 sm:w-[80%] md:left-[22%] md:w-[50%] lg:left-[30%] left-[34%] w-[29%]  flex flex-col z-60">
        {showSuggestion && suggestions.length > 0 && (
          <div className="bg-white dark:bg-gray-900 dark:text-white dark:border dark:border-gray-700 dark:shadow-none py-2 shadow-md shadow-gray-300 border border-gray-200 rounded-2xl">
            <ul>
              {suggestions &&
                suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white  px-4 py-[0.30rem]  "
                    onMouseDown={(e) => onClickSuggestion(e)}
                  >
                    <CiSearch />
                    <span className="text-[13px] ">{suggestion}</span>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      {/* Right-side-Container - userinfo and theme */}
      <div className="User-info-container flex  items-center justify-between w-28 md:w-32 lg:w-44 p-1 mx-2 sm:mx-0 ">
        <div className="create-icon  rounded-full  dark:hover:text-black">
          {themeMode === "light" ? (
            <div
              className="w-full h-full p-2 rounded-full hover:bg-gray-200 hover:p-2"
              onClick={() => themeChange("dark")}
            >
              <FaMoon />
            </div>
          ) : (
            <div
              className="w-full h-full p-2 rounded-full hover:bg-gray-200 hover:p-2 dark:hover:text-black"
              onClick={() => themeChange("light")}
            >
              <FiSun />
            </div>
          )}
        </div>

        <div className="create-icon sm:hidden  py-[0.35rem] px-2 rounded-full hover:bg-gray-200 dark:hover:text-black">
          <RiVideoAddLine className="w-5 h-5" />
        </div>
        <div className="notification-icon py-[0.3rem] px-[0.5rem] rounded-full hover:bg-gray-200 dark:hover:text-black">
          <IoMdNotificationsOutline className="w-5 h-5" />
        </div>
        <div className="user-icon py-[0.3rem] px-[0.5rem] rounded-full hover:bg-gray-200 dark:hover:text-black">
          <FaUserAlt className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Header;

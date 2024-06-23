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
import { Link, useNavigate } from "react-router-dom";
// import SearchBox from "./SearchBox";
// import SuggestionListBox from "./SuggestionListBox";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  // console.log(searchQuery);
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
    // console.log(jsonData[1]);
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
    // console.log("dispatched");
    dispatch(toggleMenu());
  };

  // const handleOnClick = (suggestion) => {
  //   console.log("clicked suggestion : ", suggestion);
  //   setSearchQuery(suggestion);
  //   setShowSuggestion(false);
  // };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Redirect to a new page with searchQuery as a query parameter
      navigate(`/results?search_query=${encodeURIComponent(searchQuery)}`);
    }
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
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className="w-20 h-[1.1rem] rounded mx-2"
            />
          </Link>
          <p className="absolute right-0 -top-1   font-sans text-[10px]">IN</p>
        </div>
      </div>

      {/* Middle-Container - search*/}

      <div className=" w-1/3  md:w-[40%]  flex  ">
        <div className=" w-full   flex ">
          <input
            type="search"
            placeholder="Search"
            value={searchQuery}
            className="w-full py-2 px-4 rounded-l-full  focus:outline-none font-sans text-sm border border-gray-400"
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={(e) => console.log(searchQuery)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <Link to={"/results?search_query=" + searchQuery}>
          <div className="flex items-center justify-center py-2 px-4 bg-gray-100 rounded-e-full border  border-l-0">
            <button>
              <CiSearch className="w-5 h-5" />
            </button>
          </div>
        </Link>

        <div className="microphone-icon bg-gray-100 flex items-center mx-3 rounded-full p-2">
          <BiSolidMicrophone className="w-5 h-5" />
        </div>
      </div>
      <div className="absolute top-[3.15rem] left-[31%]   w-1/3 md:w-[33%]  flex flex-col z-60 ">
        {showSuggestion &&
          (suggestions.length === 0 ? (
            " "
          ) : (
            <div className=" bg-white    py-2 shadow-md shadow-gray-300 borderborder-gray-200 rounded-2xl">
              <ul onClick={console.log(suggestions)}>
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 hover:bg-gray-200 px-4 py-[0.30rem] "
                  >
                    <CiSearch className="w-4 h-4" />
                    <Link to={"/results?search_query=" + suggestion}>
                      <p className="text-sm font-medium cursor-pointer">
                        {suggestion}
                      </p>
                    </Link>
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

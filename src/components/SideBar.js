import React from "react";
import YoutubeLogo from "../images/youtube-icon.svg";
import YoutubeStudio from "../images/youtube-studio.svg";
import YoutubeMusic from "../images/youtube-music.svg";
import YoutubeKids from "../images/YouTube Kids.png";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { BiSolidUserAccount } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { RiPlayList2Line } from "react-icons/ri";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { PiFireLight } from "react-icons/pi";
import { PiMusicNoteThin } from "react-icons/pi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbThin } from "react-icons/pi";
import { GiHanger } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiFlagLine } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { HiMiniSignal } from "react-icons/hi2";
// import { toggleMenu } from "../utils/menuBarSlice";
// import logo from "../images/YouTube_Logo_2017.svg.png";

const SideBar = () => {
  // const dispatch = useDispatch();
  // const toggleMenuHandler = () => {
  //   console.log("dispatched");
  //   dispatch(toggleMenu());
  // };

  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  console.log(isMenuOpen);
  if (isMenuOpen)
    return (
      <div className=" h-screen ">
        <div className="flex flex-col">
          <ul className="flex flex-col mx-2 my-2">
            <li className="flex flex-col items-center hover:bg-stone-100 px-2 py-3 rounded-lg">
              <GoHome className="w-5 h-5" />
              <h2 className="text-[10px] my-1">Home</h2>
            </li>
            <li className="flex flex-col items-center hover:bg-stone-100 px-2 py-3 rounded-lg">
              <SiYoutubeshorts className="mx-2 w-5 h-5" />
              <h2 className="text-[10px] my-1">Shorts</h2>
            </li>
            <li className="flex flex-col items-center hover:bg-stone-100 px-2 py-3 rounded-lg">
              <MdOutlineSubscriptions className="mx-2 w-5 h-5" />
              <h2 className="text-[10px] my-1">Subscriptions</h2>
            </li>
            <li className="flex flex-col items-center hover:bg-stone-100 px-2 py-3 rounded-lg">
              <MdOutlineVideoLibrary className="mx-2 w-5 h-5" />
              <h2 className="text-[10px] my-1">You</h2>
            </li>
          </ul>
        </div>
      </div>
    );
  else {
    return (
      <div className="side-bar h-screen inset-0 w-56 overflow-y-scroll ">
        {/* <div className="flex  items-center mx-2 pl-3">
          <div>
            <HiBars3
              className="w-6 h-6 mx-2 cursor-pointer"
              onClick={() => toggleMenuHandler()}
            />
          </div>
          <div className="relative pr-2">
            <img src={logo} alt="logo" className="w-24 h-12 rounded " />
            <p className="absolute right-0 top-[0.60rem] font-sans text-[10px]">
              IN
            </p>
          </div>
        </div> */}
        <div className="Section-1 border-b border-gray-300 mx-2 ">
          <ul className=" mx-2 mb-2 mt-1">
            <li className="flex items-center text-[14px] py-2 pl-2  hover:bg-gray-100 hover:rounded-xl ">
              <GoHome className="mx-2 w-4 h-4" />
              <h2 className="mx-3">Home</h2>
            </li>
            <li className="flex items-center text-[14px] py-2 pl-2  hover:bg-gray-100 hover:rounded-xl">
              <SiYoutubeshorts className="mx-2 w-4 h-4" />
              <h2 className="mx-3">Shorts</h2>
            </li>
            <li className="flex items-center text-[14px] py-2 pl-2  hover:bg-gray-100 hover:rounded-xl">
              <MdOutlineSubscriptions className="mx-2 w-4 h-4" />
              <h2 className="mx-3">Subscriptions</h2>
            </li>
          </ul>
        </div>
        <div className="Section-2 border-b border-gray-300 mx-2 ">
          <div className="Section-heading flex items-center ml-2  py-2 pl-3  mt-2 hover:bg-gray-100 hover:rounded-xl ">
            <h2 className="text-sm font-medium mx-1">You</h2>
            <GoChevronRight className="mx-2 w-4 h-4" />
          </div>
          <ul className=" mx-2 mb-2 ">
            <li className="flex items-center py-2 pl-2 text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <BiSolidUserAccount className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">Your channel</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <GoHistory className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">History</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <RiPlayList2Line className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">Playlist</h2>
            </li>
            <li className="flex items-center py-2 pl-2 text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <GoVideo className="mx-2 w-4 h-4" />
              <h2 className="mx-3   font-thin">Your videos</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <MdOutlineWatchLater className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">Watch Later</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <AiOutlineLike className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">Liked videos</h2>
            </li>
          </ul>
        </div>
        <div className="Section-3 border-b border-gray-300 mx-2 ">
          <div className="Section-heading flex items-center ml-2 mt-2 py-2 pl-3 ">
            <h2 className="text-sm font-medium mx-1">Explore</h2>
          </div>
          <ul className=" mx-2 mb-2">
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <PiFireLight className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">Trending</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <RiShoppingBag4Line className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">Shopping</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <PiMusicNoteThin className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">Music</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <PiFilmSlateDuotone className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">Films</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <HiMiniSignal className="mx-2 w-4 h-4" />
              <h2 className="mx-3   font-thin">Live</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <SiYoutubegaming className="mx-2 w-4 h-4" />
              <h2 className="mx-3   font-thin">Gaming</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <PiNewspaperClippingLight className="mx-2 w-4 h-4" />
              <h2 className="mx-3 font-thin">News</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <TfiCup className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">Sport</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <PiLightbulbThin className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">Courses</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <GiHanger className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">Fashion & beauty</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl ">
              <MdPodcasts className="mx-2 w-4 h-4" />
              <h2 className="mx-3  font-thin">Podcasts</h2>
            </li>
          </ul>
        </div>
        <div className="Section-4 border-b border-gray-300 mx-2 ">
          <div className="Section-heading flex items-center ml-2 mt-2 py-2 pl-3  ">
            <h2 className="text-sm font-medium mx-1">More from YouTube</h2>
          </div>
          <ul className=" mx-2 mb-2">
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl">
              <img
                src={YoutubeLogo}
                alt="youtube-premium"
                className="w-5 h-5 mx-2"
              />
              <h2 className="mx-2  font-thin">YouTube Premium</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl">
              <img
                src={YoutubeStudio}
                alt="youtube-studio"
                className="w-5 h-5 mx-2"
              />
              <h2 className="mx-2  font-thin">YouTube Studio</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl">
              <img
                src={YoutubeMusic}
                alt="youtube-music"
                className="w-5 h-5 mx-2"
              />
              <h2 className="mx-2 font-thin">YouTube Music</h2>
            </li>
            <li className="flex items-center py-2 pl-2 text-[14px] hover:bg-gray-100 hover:rounded-xl">
              <img
                src={YoutubeKids}
                alt="youtube-kids"
                className="w-4 h-4 ml-2 mr-2"
              />
              <h2 className="mx-2 font-thin">YouTube Kids</h2>
            </li>
          </ul>
        </div>
        <div className="Section-5 border-b border-gray-300 mx-2 ">
          <ul className=" mx-2 my-2">
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl">
              <IoSettingsOutline className="w-4 h-4 mx-2" />
              <h2 className="mx-3  font-thin">Settings</h2>
            </li>

            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl">
              <RiFlagLine className="w-4 h-4 mx-2" />
              <h2 className="mx-3 font-thin">Report history</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl">
              <IoMdHelpCircleOutline className="w-4 h-4 mx-2" />
              <h2 className="mx-3  font-thin">Help</h2>
            </li>
            <li className="flex items-center py-2 pl-2  text-[14px] hover:bg-gray-100 hover:rounded-xl">
              <RiFeedbackLine className="w-4 h-4 mx-2" />
              <h2 className="mx-3  font-thin">Send feedback</h2>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default SideBar;

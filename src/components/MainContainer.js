import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  // console.log(isMenuOpen);
  if (isMenuOpen)
    return (
      <div className="relative z-0 dark:bg-black dark:text-white">
        <div className="flex flex-col w-full absolute top-16 left-24 sm:left-0 md:left-0 dark:bg-black dark:text-white  ">
          <div className="overflow-x-hidden overflow-y-hidden my-1  fixed top-14 left-24 sm:left-0 md:left-0 w-[93%] z-50 bg-white py-1 dark:bg-black dark:text-white ">
            <ButtonList />
          </div>
          <div className="relative">
            <div className=" side-bar h-screen  absolute top-10 left-0 dark:bg-black dark:text-white">
              <VideoContainer />
            </div>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div className="relative z-0 h-screen dark:bg-black dark:text-white">
        <div className="flex flex-col w-full absolute top-16 left-48 sm:left-0 md:left-36 dark:bg-black dark:text-white">
          <div className="overflow-x-hidden   overflow-y-hidden my-1  fixed top-14 left-60 sm:left-0 sm:w-[98%] w-[84%] z-50 bg-white py-1 dark:bg-black dark:text-white md:w-[70%]">
            <div className="sticky top-0  mb-1 dark:bg-black dark:text-white">
              <ButtonList />
            </div>
          </div>
          <div className="relative ">
            <div className=" side-bar h-screen absolute top-10 left-0 sm:left-0 dark:bg-black dark:text-white">
              <VideoContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainContainer;

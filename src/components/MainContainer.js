import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  // console.log(isMenuOpen);
  if (isMenuOpen)
    return (
      <div className="relative z-0">
        <div className="flex flex-col w-full absolute top-16 left-24 ">
          <div className="overflow-x-hidden overflow-y-hidden my-1  fixed top-14 left-24 w-[93%] z-50 bg-white py-1 ">
            <ButtonList />
          </div>
          <div className="relative">
            <div className=" side-bar h-screen  absolute top-10 left-0">
              <VideoContainer />
            </div>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div className="relative z-0">
        <div className="flex flex-col w-full absolute top-16 left-52">
          <div className="overflow-x-hidden   overflow-y-hidden my-1  fixed top-14 left-[14.5rem] w-[84%] z-50 bg-white py-1  ">
            <div className="sticky top-0  mb-1">
              <ButtonList />
            </div>
          </div>
          <div className="relative ">
            <div className=" side-bar h-screen absolute top-10 left-0 ">
              <VideoContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainContainer;

import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full  ">
      <div className="overflow-x-hidden  my-2 ">
        <div className="sticky top-0 z-10 mb-1 ">
          <ButtonList />
        </div>
      </div>
      <div className=" side-bar h-screen  overflow-y-scroll ">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;

import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="overflow-x-hidden  my-2 ">
        <div className="sticky top-0 z-10 pb-4 ">
          <ButtonList />
        </div>
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

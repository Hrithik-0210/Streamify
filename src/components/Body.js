import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  console.log(isMenuOpen);

  return (
    <div className="flex ">
      {isMenuOpen ? (
        <div className="w-[6%]">
          <SideBar />
        </div>
      ) : (
        <div className="w-[15%]">
          <SideBar />
        </div>
      )}

      {isMenuOpen ? (
        <div className="w-[92%] border border-red-300 px-2 ">
          <MainContainer />
        </div>
      ) : (
        <div className="w-[85%] ">
          <MainContainer />
        </div>
      )}
    </div>
  );
};

export default Body;

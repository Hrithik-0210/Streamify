import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  // console.log(isMenuOpen);

  return (
    <div className="flex ">
      {isMenuOpen ? (
        <div className="">
          <SideBar />
        </div>
      ) : (
        <div className="">
          <SideBar />
        </div>
      )}

      {isMenuOpen ? (
        <div className="w-[92%]  px-2 top-20 left-24">
          <Outlet />
        </div>
      ) : (
        <div className="w-[85%] px-2 top-20 left-60">
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Body;

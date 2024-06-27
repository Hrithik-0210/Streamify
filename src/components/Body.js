import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  // console.log(isMenuOpen);

  return (
    <>
      <Header />
      <div className="flex dark:bg-black dark:text-white  ">
        {isMenuOpen ? (
          <div className="dark:bg-black dark:text-white">
            <SideBar />
          </div>
        ) : (
          <div className="mr-3 dark:bg-black dark:text-white">
            <SideBar />
          </div>
        )}

        {isMenuOpen ? (
          <div className="w-[92%]  px-2 top-20 left-24 dark:bg-black dark:text-white">
            <Outlet />
          </div>
        ) : (
          <div className="w-[88%] px-2 top-20 left-56 dark:bg-black dark:text-white  ">
            <Outlet />
          </div>
        )}
      </div>
    </>
  );
};

export default Body;

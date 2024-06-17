import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ name }) => {
  // console.log(name);
  return (
    <div className="button-conatainer ">
      {name === "All" ? (
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-stone-600 text-white py-[0.35rem] px-4 rounded-lg text-[14px] font-semibold"
                : "bg-button-list-color py-2 px-4 rounded-lg text-[14px] font-medium"
            } hover:bg-stone-300  `
          }
        >
          <button className="my-[0.35rem]">{name}</button>
        </NavLink>
      ) : (
        <NavLink
          to={"/" + name}
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-stone-600 text-white py-[0.35rem] px-4 rounded-lg text-[14px] font-semibold"
                : "bg-button-list-color py-2 px-4 rounded-lg text-[14px] font-medium"
            } hover:bg-stone-300  `
          }
        >
          <button className="my-[0.35rem]">{name}</button>
        </NavLink>
      )}
    </div>
  );
};

export default Button;

import React from "react";

const Button = ({ name, isActive, onClick }) => {
  return (
    <div className="button-container">
      <button
        className={`my-[0.35rem] py-1 px-4 rounded-lg text-[14px] font-medium  ${
          isActive
            ? "bg-stone-700 text-white"
            : "bg-button-list-color text-black"
        }`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;

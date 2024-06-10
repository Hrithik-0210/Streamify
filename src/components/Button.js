import React from "react";

const Button = ({ name }) => {
  return (
    <div className="button-conatainer ">
      <button className="  py-1 px-4 rounded-lg bg-button-list-color  text-[15px] font-medium  hover:bg-stone-200 ">
        {name}
      </button>
    </div>
  );
};

export default Button;

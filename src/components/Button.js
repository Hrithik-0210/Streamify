import React from "react";

const Button = ({ name }) => {
  return (
    <div className="button-conatainer ">
      <button className=" m-[0.35rem]  py-1 px-4 rounded-lg bg-button-list-color  text-[15px] font-medium w-fit ">
        {name}
      </button>
    </div>
  );
};

export default Button;

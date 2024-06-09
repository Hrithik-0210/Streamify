import React from "react";
import Button from "./Button";
// import { Link } from "react-router-dom";

const List = [
  "All",
  "Music",
  "Mixes",
  "Sony",
  "Live",
  "News",
  "Movies",
  "Programming",
  "JavaScript",
  "Sports",
  "ReactJs",
  "Albums",
  "Cricket",
  "Series",
  "laptops",
  "Watched",
  // "Cooking",
  // "Recently upload",
  // "Hindi Songs",
  // "South Indian",
  // "New to you",
];

const ButtonList = () => {
  return (
    <div className="flex flex-row">
      {List.map((name) => {
        return <Button name={name} />;
      })}
    </div>
  );
};

export default ButtonList;

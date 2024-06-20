import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
// import { MdOutlineSort } from "react-icons/md";

const Comment = ({ item }) => {
  const [userProfile, setUserProfile] = useState();

  console.log(userProfile);
  const {
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    textDisplay,
    likeCount,
  } = item;

  useEffect(() => {
    getauthorProfileImageUrl();
  }, []);

  const getauthorProfileImageUrl = async () => {
    const data = await fetch(authorProfileImageUrl);
    const imageBlob = await data.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setUserProfile(imageObjectURL);
  };

  function publishTime(publishedAt) {
    const currentDate = new Date();
    const targetDate = new Date(publishedAt);
    const differenceMs = targetDate - currentDate;
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    // console.log(Math.abs(differenceDays));

    const diff = Math.abs(differenceDays) + " days ago";
    return diff;
  }

  return (
    <div className="comment-container flex gap-3  ">
      <div className="image-container flex items-start ">
        <img
          src={userProfile}
          alt="userPicture"
          className="w-9 h-9 rounded-full"
        />
      </div>

      <div className="flex flex-col gap-1   ">
        <div className="user-details flex gap-2 items-center">
          <h2 className="text-xs font-medium">{authorDisplayName}</h2>
          <p className="text-xs text-gray-600">{publishTime(publishedAt)}</p>
        </div>
        <div className="text-xs font-normal">
          <p className="text-sm">{textDisplay}</p>
        </div>
        <div className="comment-like-unlike flex gap-3">
          <div className="flex">
            <AiOutlineLike className="w-5 h-5" />
            <p className="text-xs text-gray-400">{likeCount}</p>
          </div>
          <BiDislike className="w-[1.15rem] h-[1.15rem]  text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Comment;

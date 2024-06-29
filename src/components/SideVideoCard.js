import React from "react";
import { GoDotFill } from "react-icons/go";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { MdCheckCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

const SideVideoCard = ({ items }) => {
  // console.log(items);

  const { snippet, statistics } = items;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  function formatViews(viewCount) {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount >= 1000) {
      return Math.round(viewCount / 1000) + "K";
    } else {
      return viewCount.toString();
    }
  }

  function publishTime(publishedAt) {
    const currentDate = new Date();
    const targetDate = new Date(publishedAt);
    const differenceMs = targetDate - currentDate;
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    // console.log(Math.abs(differenceDays));

    const diff = Math.abs(differenceDays) + " days ago";
    return diff;
  }
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);
  // console.log(isMenuOpen);
  return (
    <div className=" w-full">
      {isMenuOpen ? (
        <div className="video-card-container group w-full my-2 px-2 rounded-2xl  transition ease-linear delay-150  duration-200   ">
          <div className="video-card w-[100%] h-fit transition ease-linear  grid grid-flow-col grid-cols-12 gap-2">
            <div className="thumbnail-container rounded-2xl  h-full  col-span-6 items-center">
              <img
                src={thumbnails.medium.url}
                alt="thumbnail"
                className="rounded-xl  transition-all delay-100 w-full h-full "
              />
            </div>
            <div className="video-details flex  h-24  font-medium col-span-6">
              <div className="channel-details flex flex-col overflow-hidden ">
                <div className="title text-xs mt-1 mb-2 line-clamp-2">
                  {title}
                </div>

                <div className="check-logo flex gap-1 items-center font-normal">
                  <div className="channelName text-[13px] text-gray-500 dark:text-stone-200 dark:font-thin dark:text-[12px]">
                    {channelTitle}
                  </div>
                  <PiCheckCircleDuotone className=" w-[0.8rem] h-[0.8rem]" />
                </div>
                <div className="view-and-time flex items-center text-[13px] font-normal text-gray-500 dark:text-stone-200">
                  {formatViews(viewCount)} views
                  <GoDotFill className="w-[0.35rem] h-[0.35rem] mx-[0.4rem]" />
                  <div className="time-ago dark:text-stone-200">
                    {publishTime(publishedAt)}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start my-2 ">
              <BsThreeDots className="rotate-90 " />
            </div>
          </div>
        </div>
      ) : (
        <div className="video-card-container group w-full my-1 px-2 rounded-2xl  transition ease-linear delay-150  duration-200 ">
          <div className="video-card w-[100%] h-fit transition ease-linear  grid grid-flow-col  gap-2">
            <div className="thumbnail-container rounded-2xl  h-[5.5rem]  col-span-7 items-center">
              <img
                src={thumbnails.medium.url}
                alt="thumbnail"
                className="rounded-xl  transition-all delay-100 w-full h-full "
              />
            </div>
            <div className="video-details flex  h-24  font-medium col-span-5">
              <div className="channel-details flex flex-col overflow-hidden ">
                <div className="title text-xs mt-1 mb-2 line-clamp-2">
                  {title}
                </div>

                <div className="check-logo flex gap-1 items-center font-normal">
                  <div className="channelName text-[13px] text-gray-500">
                    {channelTitle}
                  </div>
                  <PiCheckCircleDuotone className=" w-[0.8rem] h-[0.8rem]" />
                </div>
                <div className="view-and-time flex items-center text-[13px] font-normal text-gray-500">
                  {formatViews(viewCount)} view
                  <GoDotFill className="w-[0.35rem] h-[0.35rem] mx-[0.4rem]" />
                  <div className="time-ago">{publishTime(publishedAt)}</div>
                </div>
              </div>
            </div>
            <div className="flex items-start my-2 ">
              <BsThreeDots className="rotate-90 " />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideVideoCard;

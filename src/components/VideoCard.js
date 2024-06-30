import React from "react";
import { GoDotFill } from "react-icons/go";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { MdCheckCircle } from "react-icons/md";
import { useSelector } from "react-redux";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const VideoCard = ({ items }) => {
  const { snippet, statistics } = items;
  const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;
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
    <div>
      {isMenuOpen ? (
        <div className="video-card-container group w-fit my-2 px-2 py-3 sm:p-0 rounded-2xl hover:bg-Video-card-color dark:hover:bg-gray-800 transition ease-linear delay-150  duration-200  ">
          <div className="video-card w-72 h-64 sm:w-96 sm:h-80 sm:my-2 transition ease-linear  ">
            <div className="thumbnail-continer rounded-2xl h-40 sm:h-[13.5rem] ">
              <img
                src={thumbnails.high.url}
                alt="thumbnail"
                className="rounded-xl group-hover:rounded-sm transition-all delay-100 w-full h-full  sm:w-full sm:h-full object-cover object-center "
              />
            </div>
            <div className="video-details flex py-2 font-medium">
              <div className="channel-logo  flex items-center mr-2">
                <TiSocialYoutubeCircular className="w-10 h-10 rounded-full" />
              </div>
              <div className="channel-details flex flex-col overflow-hidden ">
                <div className="title text-sm my-1 line-clamp-2">{title}</div>

                <div className="check-logo flex gap-1 items-center font-normal">
                  <div className="channelName text-[13px] text-gray-500 dark:text-stone-300">
                    {channelTitle}
                  </div>
                  <PiCheckCircleDuotone className=" w-[0.8rem] h-[0.8rem] dark:text-stone-300" />
                </div>
                <div className="view-and-time flex items-center text-[13px] font-normal text-gray-500 dark:text-stone-300">
                  {formatViews(viewCount)} views
                  <GoDotFill className="w-[0.35rem] h-[0.35rem] mx-[0.4rem]" />
                  <div className="time-ago">{publishTime(publishedAt)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="video-card-container group w-fit my-2 px-2 py-3 sm:p-0 rounded-2xl hover:bg-Video-card-color dark:hover:bg-gray-800 transition ease-linear delay-150 duration-200  ">
          <div className="video-card w-[16.5rem] sm:w-96  sm:h-80 ">
            <div className="thumbnail-continer rounded-2xl h-36 sm:h-[13.5rem]">
              <img
                src={thumbnails.high.url}
                alt="thumbnail"
                className="rounded-xl group-hover:rounded-sm transition-all delay-100 w-full h-full object-cover object-center"
              />
            </div>
            <div className="video-details flex py-2 font-medium w-full">
              <div className="channel-logo w-10 h-10 rounded-full flex items-center mr-3">
                <TiSocialYoutubeCircular className="w-9 h-9" />
              </div>
              <div className="channel-details flex flex-col overflow-hidden ">
                <div className="title text-sm my-1  line-clamp-2">{title}</div>

                <Link to={"/channel?id=" + channelId} key={channelId}>
                  <div className="check-logo flex gap-1 items-center font-normal">
                    <div className="channelName text-[13px] text-gray-500 dark:text-stone-300">
                      {channelTitle}
                    </div>
                    <MdCheckCircle className=" w-[0.8rem] h-[0.8rem] text-gray-500 dark:text-stone-300" />
                  </div>
                </Link>
                <div className="view-and-time flex items-center text-[13px] font-normal text-gray-500 dark:text-stone-300">
                  {formatViews(viewCount)} views
                  <GoDotFill className="w-[0.35rem] h-[0.35rem] mx-[0.4rem]" />
                  <div className="time-ago">{publishTime(publishedAt)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;

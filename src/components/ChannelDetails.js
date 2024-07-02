import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

const ChannelDetails = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function formatViews(viewCount) {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    } else if (viewCount >= 1000) {
      return Math.round(viewCount / 1000) + "K";
    } else {
      return viewCount.toString();
    }
  }

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  if (item?.length === 0) {
  } else {
    const [{ snippet, statistics }] = item;
    const { description, localized, thumbnails, customUrl } = snippet;
    const { title } = localized;
    const { subscriberCount, videoCount } = statistics;

    return (
      <div className="channelDetails-container sm:w-[94svw]  w-[65svw] mx-auto ">
        <div className="flex sm:gap-2 items-center  w-full gap-4 ">
          <div className="channelImg-container sm:w-20 sm:h-20 w-36 h-36 rounded-full ">
            <img
              src={thumbnails.high.url}
              alt=""
              className="w-full h-full  rounded-full object-cover object-center"
            />
          </div>
          <div className="details-container flex flex-col gap-1">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-[11.5px] font-thin">{customUrl}</p>
            <div className="flex gap-2 items-center">
              <p className="text-[11.5px] font-thin">
                {formatViews(subscriberCount)} subscribers
              </p>
              <GoDotFill className="w-[0.35rem] h-[0.35rem] mx-[0.4rem]" />
              <p className="text-[11.5px] font-thin">
                {formatViews(videoCount)} videos
              </p>
            </div>
          </div>
        </div>
        <div className="description-container">
          <div className="text-xs font-normal whitespace-pre-line  flex items-end justify-start sm:text-[11.5px] my-2 ">
            <span className={isExpanded ? "" : "line-clamp-2"}>
              {description}
            </span>
            {description.split("\n").length > 2 && (
              <span>
                <button
                  onClick={toggleExpansion}
                  className="text-gray-800 font-semibold"
                >
                  {isExpanded ? "Show less" : "...more"}
                </button>
              </span>
            )}
          </div>
        </div>
        <div className="sebscribe-join-btn-container flex sm:justify-between items-center">
          <button className="text-gray-700 font-semibold text-xs bg-gray-100 rounded-2xl py-[0.45rem] px-4 sm:w-[50%] w-fit h-fit mx-4 dark:bg-stone-200 dark:text-gray-800 dark:font-medium sm:justify-items-end">
            Subscribe
          </button>
          <button className="text-gray-700 font-semibold text-xs bg-gray-100 rounded-2xl py-[0.45rem] px-4 sm:w-[50%] w-fit h-fit mx-4 dark:bg-stone-200 dark:text-gray-800 dark:font-medium sm:justify-items-end">
            Join
          </button>
        </div>
      </div>
    );
  }
};

export default ChannelDetails;

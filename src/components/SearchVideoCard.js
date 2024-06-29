import React from "react";
import { BsThreeDots } from "react-icons/bs";
// import { GoDotFill } from "react-icons/go";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const SearchVideoCard = ({ item }) => {
  // console.log(item);
  const { snippet } = item;
  const { channelTitle, description, publishedAt, thumbnails, title } = snippet;

  function publishTime(publishedAt) {
    const currentDate = new Date();
    const targetDate = new Date(publishedAt);
    const differenceMs = currentDate - targetDate;

    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    if (differenceDays >= 365) {
      const differenceYears = Math.floor(differenceDays / 365);
      if (differenceYears === 1) {
        return "1 year ago";
      } else {
        return `${differenceYears} years ago`;
      }
    } else if (differenceDays >= 30) {
      const differenceMonths = Math.floor(differenceDays / 30);
      if (differenceMonths === 1) {
        return "1 month ago";
      } else {
        return `${differenceMonths} months ago`;
      }
    } else if (differenceDays > 0) {
      if (differenceDays === 1) {
        return "1 day ago";
      } else {
        return `${differenceDays} days ago`;
      }
    } else {
      const differenceHours = Math.floor(differenceMs / (1000 * 60 * 60));
      if (differenceHours === 1) {
        return "1 hour ago";
      } else if (differenceHours > 0) {
        return `${differenceHours} hours ago`;
      } else {
        const differenceMinutes = Math.floor(differenceMs / (1000 * 60));
        if (differenceMinutes === 1) {
          return "1 minute ago";
        } else {
          return `${differenceMinutes} minutes ago`;
        }
      }
    }
  }

  //   console.log(snippet);
  return (
    <div className="video-card-container  transition ease-linear delay-150  duration-200 w-[65svw] h-fit rounded-2xl grid grid-flow-col grid-cols-12 gap-2 sm:flex sm:flex-col sm:hover:bg-stone-100 sm:my-5 sm:w-96 sm:h-[22rem]">
      <div className="thumbnail-container rounded-xl   w-full md:h-52 xl:h-60 2xl:h-64 items-center  m-2 col-span-5 overflow-hidden hover:rounded-sm transition-all ease-linear delay-100 duration-150 sm:w-96 sm:h-64 ">
        <img
          src={thumbnails.high.url}
          alt="thumbnail"
          className="  w-full h-full sm:w-full sm:h-full  flex items-center justify-center  object-center object-cover "
        />
      </div>
      <div className="video-details   h-24  font-medium m-2 col-span-6">
        <div className="channel-details  overflow-hidden ">
          <div className="title text-base font-thin my-1 line-clamp-2 sm:text-sm">
            {title}
          </div>

          <div className="view-and-time      items-center text-[13px] font-normal text-gray-500">
            <div className="time-ago dark:text-stone-200 dark:font-thin dark:text-[13px]">
              {publishTime(publishedAt)}
            </div>
          </div>
          <div className="check-logo  gap-2 items-center font-normal flex  my-2 ">
            <div className="channelName text-[13px] flex items-center gap-2">
              <TiSocialYoutubeCircular className="w-8 h-8  rounded-full dark:text-stone-200" />
              <p className="text-gray-500 dark:text-stone-200">
                {channelTitle}
              </p>
            </div>
            <div className="sm:hidden">
              <PiCheckCircleDuotone className=" w-[0.8rem] h-[0.8rem] " />
            </div>
          </div>
          <div className="text-[11.5px] font-thin text-gray-500 dark:text-stone-200 mt-5 sm:hidden">
            {description}
          </div>
        </div>
      </div>
      <div className=" items-start my-2 m-2 col-span-1 py-1 sm:hidden">
        <BsThreeDots className="rotate-90 " />
      </div>
    </div>
  );
};

export default SearchVideoCard;

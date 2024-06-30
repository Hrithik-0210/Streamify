import React from "react";

const ChannelVideos = ({ video }) => {
  console.log(video);
  const { snippet } = video;
  const { thumbnails, title, publishedAt } = snippet;

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
    <div className="channel-video-container  sm:flex-col sm:gap-2 flex px-2 py-3 hover:bg-gray-100 rounded-2xl  ">
      <div className="videocard  sm:grid sm:grid-cols-12  sm:w-[90svw] sm:h-32 sm:my-2 w-[16.5rem] h-[12.5rem]">
        <div className="thumbnail-container sm:col-span-7 sm:h-[8.5rem] rounded-2xl hover:rounded-sm h-36 ">
          <img
            src={thumbnails.high.url}
            alt=""
            className="sm:w-full sm:h-full h-full w-full object-cover object-center rounded-2xl hover:rounded-sm transition-all delay-100 ease-linear duration-150"
          />
        </div>
        <div className="sm:col-span-5 mt-2 px-2">
          <div className="flex flex-col">
            <p className="text-xs font-medium line-clamp-2 my-1">{title}</p>
            <p className="text-[11.5px] font-thin">
              {publishTime(publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelVideos;

import React from "react";
import { GoDotFill } from "react-icons/go";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { MdCheckCircle } from "react-icons/md";

const VideoCard = ({ items }) => {
  console.log(items.snippet);
  const { snippet, statistics } = items;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  // console.log(info.snippet.localized.title);
  // console.log(info.snippet.thumbnails.standard.url);

  function convertToMilions(viewCount) {
    return (viewCount / 1000000).toFixed(1) + "M";
  }

  return (
    <div className="video-card-container group w-fit m-2 p-3 rounded-2xl hover:bg-Video-card-color transition ease-linear delay-150 ">
      <div className="video-card">
        <div className="thumbnail-continer rounded-2xl">
          <img
            src={thumbnails.medium.url}
            alt="thumbnail"
            className="rounded-xl group-hover:rounded-none transition-all delay-100"
          />
        </div>
        <div className="video-details flex py-2 font-medium">
          <div className="channel-logo w-10 h-10 rounded-full flex items-center mr-3">
            <TiSocialYoutubeCircular className="w-full h-full" />
          </div>
          <div className="channel-details flex flex-col ">
            <div className="title text-sm my-1">{title}</div>

            <div className="check-logo flex gap-1 items-center font-normal">
              <div className="channelName text-[13px] text-gray-500">
                {channelTitle}
              </div>
              <MdCheckCircle className=" w-[0.8rem] h-[0.8rem]" />
            </div>
            <div className="view-and-time flex items-center text-[13px] font-normal text-gray-500">
              {viewCount <= 999999 ? (
                <div className="views mr-2 ">{viewCount / 1000}k views</div>
              ) : (
                <div className="views mr-2 ">
                  {convertToMilions(viewCount)} views
                </div>
              )}
              <GoDotFill className="w-[0.35rem] h-[0.35rem] mx-[0.4rem]" />
              <div className="time-ago">2 months ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

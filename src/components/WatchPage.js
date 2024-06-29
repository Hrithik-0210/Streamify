import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/menuBarSlice";
import { Link, useSearchParams } from "react-router-dom";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { MdCheckCircle } from "react-icons/md";
import { WatchPageShimmer } from "./Shimmer";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { TiScissorsOutline } from "react-icons/ti";
import { MdPlaylistAdd } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import "../App.css";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import SideVideoCard from "./SideVideoCard";
import CommentContainer from "./CommentContainer";
import SubscriberCount from "./SubscriberCount";
// import { G } from "../utils/Constants";

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [isExpanded, setIsExpanded] = useState(false);
  const [sideVideo, setSideVideos] = useState([]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
    getSideVideos();
  }, [videoId]);

  const GOOGLE_API_KEY = "AIzaSyDUfAMkZHrrPIDR_wcVuVBsHcUiiCJHfUQ";
  const VIDEO_DETAILS =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
    videoId +
    "&key=" +
    GOOGLE_API_KEY;

  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_DETAILS);
    const jsonData = await data.json();
    setVideoDetails(jsonData.items[0]);
    // console.log(videoDetail);
  };
  const getSideVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    // console.log(jsonData.items);
    setSideVideos(jsonData.items);
  };

  const channelId = videoDetails?.snippet?.channelId;
  // console.log(channelId);
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
  const formatDescription = (text) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlPattern, (url) => {
      return `<a href=${url} style="color:black;"> ${url}<?a>`;
    });
  };

  if (videoDetails?.length === 0) {
    return <WatchPageShimmer />;
  } else {
    const { snippet, statistics } = videoDetails;
    const { channelTitle, title, publishedAt, description } = snippet;
    const { viewCount, likeCount, commentCount } = statistics;
    const formatedDescription = formatDescription(description);
    return (
      <div className="absolute top-20 left-24  w-[92svw] flex md:w-[80svw] sm:w-svw gap-7">
        <div className=" rounded-xl   w-[70%] h-fit md:w-full">
          <div className=" w-[65.5svw] h-[72.7svh] md:w-[80svw] md:h-[65svw]">
            <iframe
              width="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen="allowfullscreen"
              className="rounded-xl h-full"
            ></iframe>
          </div>
          <div className="flex flex-col ">
            <div className="mt-2 p-1  text-base font-semibold">{title}</div>
            <div className=" flex py-1 justify-between">
              <div className="left-details-container flex items-center">
                <div className="flex items-center mr-2">
                  <TiSocialYoutubeCircular className="w-8 h-8" />
                </div>
                <div className="flex flex-col mx-2">
                  <div className="flex items-center text-[11.5px] text-gray-700 dark:text-stone-200">
                    <h2 className="text-sm font-medium">{channelTitle}</h2>
                    <MdCheckCircle className=" w-[0.8rem] h-[0.8rem] text-gray-500 mx-1" />
                  </div>

                  <div className="flex items-center text-[11.5px] text-gray-600 dark:text-stone-200">
                    <SubscriberCount item={channelId} />
                  </div>
                </div>
                <button className="text-white text-xs bg-gray-900 rounded-2xl py-[0.45rem] px-4 w-fit h-fit mx-4 dark:bg-stone-200 dark:text-gray-800 dark:font-medium">
                  Subscribe
                </button>
              </div>
              <div className="right-details-conatiner  flex items-center gap-2">
                <div className="like-dislike-container bg-gray-100  rounded-full flex h-8 dark:bg-black">
                  <div className="like-container hover:bg-gray-200 rounded-l-full flex items-center dark:bg-gray-900 dark:text-gray-200 dark:font-medium dark:hover:bg-gray-700 ">
                    <div className="flex border-r border-gray-400 my-1 px-4  gap-2 items-center justify-center">
                      <AiOutlineLike className="w-5 h-5" />
                      <p className="text-xs font-medium">
                        {formatViews(likeCount)}
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center justify-center dislike-container hover:bg-gray-200 rounded-r-full p-[0.35rem] dark:bg-gray-900 dark:text-gray-200 dark:font-medium dark:hover:bg-gray-700 ">
                    <div className="my-1 px-2 gap-1 ">
                      <BiDislike className="w-[1.15rem] h-[1.15rem]  text-gray-700 dark:text-gray-200 " />
                    </div>
                  </div>
                </div>
                <div className="share-container flex items-center justify-center gap-2 bg-gray-100 rounded-full hover:bg-gray-200 py-2 px-4 h-8 dark:bg-gray-900 dark:text-gray-200 dark:font-medium dark:hover:bg-gray-700">
                  <PiShareFatThin className="w-5 h-5 text-gray-600 dark:text-gray-200" />
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-200">
                    Share
                  </p>
                </div>
                <div className="download-conatiner sm:hidden md:hidden flex items-center justify-center gap-3 bg-gray-100 rounded-full hover:bg-gray-200 py-2 px-4 h-8  dark:bg-gray-900 dark:text-gray-200 dark:font-medium dark:hover:bg-gray-700">
                  <TfiDownload className="w-4 h-4" />
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-200">
                    Download
                  </p>
                </div>
                <div className="trim-conatiner sm:hidden md:hidden flex items-center justify-center gap-3 bg-gray-100 rounded-full hover:bg-gray-200 py-2 px-4 h-8 dark:bg-gray-900 dark:text-gray-200 dark:font-medium dark:hover:bg-gray-700">
                  <TiScissorsOutline className="w-5 h-5 text-gray-600 -rotate-90 dark:text-gray-200" />
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-200">
                    Clip
                  </p>
                </div>
                <div className="save-conatiner sm:hidden md:hidden  flex items-center justify-center gap-3 bg-gray-100 rounded-full hover:bg-gray-200 py-2 px-4 h-8 dark:bg-gray-900 dark:text-gray-200 dark:font-medium dark:hover:bg-gray-700">
                  <MdPlaylistAdd className="w-5 h-5 text-gray-600 dark:text-gray-200 " />
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-200">
                    Save
                  </p>
                </div>
                <div className="threedots-conatiner  flex items-center justify-center gap-3 bg-gray-100 rounded-full hover:bg-gray-200 p-[0.35rem] h-8 dark:bg-gray-900 dark:text-gray-200 dark:font-medium dark:hover:bg-gray-700">
                  <BsThreeDots className="w-5 h-5 text-gray-600 dark:text-gray-200" />
                </div>
              </div>
            </div>
          </div>
          <div className="description-container bg-gray-100 rounded-xl mt-2 p-2 w-full flex flex-col  dark:bg-gray-950 dark:text-stone-200">
            <div className="view-container  flex items-center gap-2 ">
              <p className="text-xs font-semibold text-gray-700 dark:text-stone-200">
                {formatViews(viewCount)} views
              </p>
              <p className="text-xs font-semibold text-gray-700 dark:text-stone-200">
                {publishTime(publishedAt)}
              </p>
            </div>
            <div className="description-content mt-2 text-xs font-normal whitespace-pre-line  flex items-end justify-start ">
              <span className={isExpanded ? "" : "line-clamp-2"}>
                {/* {description} */}
                <span
                  dangerouslySetInnerHTML={{ __html: formatedDescription }}
                />
              </span>
              {description.split("\n").length > 2 && (
                <span>
                  <button
                    onClick={toggleExpansion}
                    className="text-gray-800 font-semibold dark:text-stone-200"
                  >
                    {isExpanded ? "Show less" : "...more"}
                  </button>
                </span>
              )}
            </div>
          </div>

          <div className="comment-section mt-5 w-full  ">
            <CommentContainer comment={[commentCount, GOOGLE_API_KEY]} />
          </div>
        </div>

        <div className="w-[28%] sm:hidden md:hidden absolute right-0">
          {sideVideo?.length === 0 ? (
            <WatchPageShimmer />
          ) : (
            <div className=" w-full ">
              {sideVideo.map((video) => (
                <Link to={"/watch?v=" + video.id} key={video.id}>
                  <SideVideoCard items={video} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default WatchPage;

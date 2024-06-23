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

  const GOOGLE_API_KEY = "AIzaSyBLF0MK468DY-dvJm18-MZIZ-FkRmhkztU";
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

  if (videoDetails?.length === 0) {
    return <WatchPageShimmer />;
  } else {
    const { snippet, statistics } = videoDetails;
    const { channelTitle, title, publishedAt, description } = snippet;
    const { viewCount, likeCount, commentCount } = statistics;
    return (
      <div className="absolute top-20 left-28  w-[92svw] flex ">
        <div className=" rounded-xl   w-[72%] h-fit">
          <iframe
            width="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Kannappa Official Teaser Telugu | Vishnu Manchu | Mohan Babu | Prabhas | Mohanlal | Akshay Kumar"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen="allowfullscreen"
            className="rounded-xl  h-[40rem]"
          ></iframe>
          <div className="flex flex-col ">
            <div className="mt-2 p-1  text-base font-semibold">{title}</div>
            <div className=" flex py-1 justify-between">
              <div className="left-details-container flex items-center">
                <div className="flex items-center mr-2">
                  <TiSocialYoutubeCircular className="w-8 h-8" />
                </div>
                <div className="flex flex-col mx-2">
                  <div className="flex items-center text-[11.5px] text-gray-700">
                    <h2 className="text-sm font-medium">{channelTitle}</h2>
                    <MdCheckCircle className=" w-[0.8rem] h-[0.8rem] text-gray-500 mx-1" />
                  </div>

                  <div className="flex items-center text-[11.5px] text-gray-600">
                    <SubscriberCount item={channelId} />
                  </div>
                </div>
                <button className="text-white text-xs bg-gray-900 rounded-2xl py-[0.45rem] px-4 w-fit h-fit mx-4">
                  Subscribe
                </button>
              </div>
              <div className="right-details-conatiner  flex items-center gap-2">
                <div className="like-dislike-container bg-gray-100  rounded-full flex h-8 ">
                  <div className="like-container hover:bg-gray-200 rounded-l-full flex items-center ">
                    <div className="flex border-r border-gray-400 my-1 px-4  gap-2 items-center justify-center">
                      <AiOutlineLike className="w-5 h-5" />
                      <p className="text-xs font-medium">
                        {formatViews(likeCount)}
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center justify-center dislike-container hover:bg-gray-200 rounded-r-full p-[0.35rem]">
                    <div className="my-1 px-2 gap-1 ">
                      <BiDislike className="w-[1.15rem] h-[1.15rem]  text-gray-700" />
                    </div>
                  </div>
                </div>
                <div className="share-container flex items-center justify-center gap-2 bg-gray-100 rounded-full hover:bg-gray-200 py-2 px-4 h-8">
                  <PiShareFatThin className="w-5 h-5 text-gray-600" />
                  <p className="text-xs font-medium text-gray-700">Share</p>
                </div>
                <div className="download-conatiner flex items-center justify-center gap-3 bg-gray-100 rounded-full hover:bg-gray-200 py-2 px-4 h-8">
                  <TfiDownload className="w-4 h-4" />
                  <p className="text-xs font-medium text-gray-700">Download</p>
                </div>
                <div className="download-conatiner flex items-center justify-center gap-3 bg-gray-100 rounded-full hover:bg-gray-200 py-2 px-4 h-8">
                  <TiScissorsOutline className="w-5 h-5 text-gray-600 -rotate-90" />
                  <p className="text-xs font-medium text-gray-700">Clip</p>
                </div>
                <div className="download-conatiner flex items-center justify-center gap-3 bg-gray-100 rounded-full hover:bg-gray-200 py-2 px-4 h-8">
                  <MdPlaylistAdd className="w-5 h-5 text-gray-600 " />
                  <p className="text-xs font-medium text-gray-700">Save</p>
                </div>
                <div className="download-conatiner flex items-center justify-center gap-3 bg-gray-100 rounded-full hover:bg-gray-200 p-[0.35rem] h-8">
                  <BsThreeDots className="w-5 h-5 text-gray-600 " />
                </div>
              </div>
            </div>
          </div>
          <div className="description-container bg-gray-100 rounded-xl mt-2 p-2 w-full flex flex-col  ">
            <div className="view-container  flex items-center gap-2 ">
              <p className="text-xs font-semibold text-gray-700">
                {formatViews(viewCount)} views
              </p>
              <p className="text-xs font-semibold text-gray-700">
                {publishTime(publishedAt)}
              </p>
            </div>
            <div className="description-content mt-2 text-xs font-normal whitespace-pre-line  flex items-end justify-start ">
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

          <div className="comment-section mt-5 w-full  ">
            <CommentContainer comment={[commentCount, GOOGLE_API_KEY]} />
          </div>
        </div>

        {sideVideo?.length === 0 ? (
          <WatchPageShimmer />
        ) : (
          <div className=" absolute right-7 w-[25%]">
            {sideVideo.map((video) => (
              <Link to={"/watch?v=" + video.id} key={video.id}>
                <SideVideoCard items={video} />
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
};

export default WatchPage;

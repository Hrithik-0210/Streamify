import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { ShimmerMenu } from "./Shimmer";
// import { useDispatch } from "react-redux";
// import { closeMenu } from "../utils/menuBarSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    // console.log(jsonData.items[0].snippet.title);
    setVideos(jsonData.items);
  };

  // console.log(videos);
  if (videos?.length === 0) {
    return <ShimmerMenu />;
  } else {
    return (
      // <div className="relative">
      <div className="flex flex-wrap gap-1 justify-center ">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard items={video} />
          </Link>
        ))}
      </div>
      // </div>
    );
  }
};

export default VideoContainer;

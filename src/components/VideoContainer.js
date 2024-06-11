import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    console.log(jsonData.items[0].snippet.title);
    setVideos(jsonData.items);
  };

  return (
    <div>
      <VideoCard items={videos[0]} key={videos[0]} />
    </div>
  );
};

export default VideoContainer;

import React, { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    console.log(jsonData);
  };

  return <div>VideoContainer</div>;
};

export default VideoContainer;

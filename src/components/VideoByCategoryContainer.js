import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CategoryShimmer } from "./Shimmer";
import VideoByCategoryCard from "./VideoByCategoryCard";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";

const VideoByCategoryContainer = () => {
  const [searchVideo, setSearchVideo] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  const GOOGLE_API_KEY = "AIzaSyBLF0MK468DY-dvJm18-MZIZ-FkRmhkztU";

  const VIDEO_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${GOOGLE_API_KEY}`;

  useEffect(() => {
    searchVideos();
  }, [query]);

  const searchVideos = async () => {
    const data = await fetch(VIDEO_SEARCH_API);
    const jsonData = await data.json();
    setSearchVideo(jsonData.items);
    // console.log(jsonData);
    // console.log(jsonData.items);
  };
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  // console.log(searchVideo);
  if (searchVideo?.length === 0) {
    return <CategoryShimmer />;
  } else {
    if (isMenuOpen) {
      return (
        <div className="relative z-0">
          <div className="flex flex-col w-full absolute top-16 left-24 ">
            <div className="overflow-x-hidden overflow-y-hidden my-1  fixed top-14 left-24 w-[93%] z-50 bg-white py-1 ">
              <ButtonList />
            </div>
            <div className="flex flex-wrap  justify-normal  absolute top-10 left-5">
              {searchVideo.map((video) => (
                <>
                  {video.id.videoId ? (
                    <Link
                      to={"/watch?v=" + video.id.videoId}
                      key={video.id.videoId}
                    >
                      <VideoByCategoryCard item={video} />
                    </Link>
                  ) : (
                    ""
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative z-0">
          <div className="flex flex-col w-full absolute top-16 left-56 ">
            <div className="overflow-x-hidden overflow-y-hidden my-1  fixed top-14 left-56 w-[85%] z-50 bg-white py-1 ">
              <ButtonList />
            </div>
            <div className="relative">
              <div className="flex flex-wrap gap-1 justify-normal  absolute top-10 left-5 ">
                {searchVideo.map((video) => (
                  <>
                    {video.id.videoId ? (
                      <Link
                        to={"/watch?v=" + video.id.videoId}
                        key={video.id.videoId}
                      >
                        <VideoByCategoryCard item={video} />
                      </Link>
                    ) : (
                      ""
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default VideoByCategoryContainer;

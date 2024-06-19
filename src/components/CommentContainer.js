import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MdOutlineSort } from "react-icons/md";
import { BiDislike } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import Comment from "./Comment";

const CommentContainer = ({ comment }) => {
  const [commentCount, GOOGLE_API_KEY] = comment;

  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const COMMENT_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=50`;

  function publishTime(publishedAt) {
    const currentDate = new Date();
    const targetDate = new Date(publishedAt);
    const differenceMs = targetDate - currentDate;
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    // console.log(Math.abs(differenceDays));

    const diff = Math.abs(differenceDays) + " days ago";
    return diff;
  }

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(COMMENT_API);
    const jsonData = await data.json();
    // console.log(jsonData.items);
    setComments(jsonData.items);
  };
  const commentDetails = comments.map(
    (coment) => coment.snippet.topLevelComment.snippet
  );
  console.log(commentDetails[0]);

  return (
    <div>
      <div className="comment-count flex gap-10 items-center">
        <h1 className="text-xl font-semibold">{commentCount}</h1>
        <div className="flex gap-2 items-center">
          <MdOutlineSort className="w-7 h-8" />
          <p className="text-sm text-gray-800 font-medium">Sort by</p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5">
        {commentDetails.map((comment) => (
          <Comment item={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentContainer;

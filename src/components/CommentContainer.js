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

  const COMMENT_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${GOOGLE_API_KEY}`;

  // function publishTime(publishedAt) {
  //   const currentDate = new Date();
  //   const targetDate = new Date(publishedAt);
  //   const differenceMs = targetDate - currentDate;
  //   const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  //   // console.log(Math.abs(differenceDays));

  //   const diff = Math.abs(differenceDays) + " days ago";
  //   return diff;
  // }

  useEffect(() => {
    getComments();
  }, [videoId]);

  const getComments = async () => {
    const data = await fetch(COMMENT_API);
    const jsonData = await data.json();
    // console.log(jsonData.items);
    setComments(jsonData.items);
  };
  const commentDetails = comments.map((coment) => coment);
  const commentReplies = comments.map((coment) => coment?.replies?.comments);
  // console.log(commentDetails[0]);
  // console.log(commentReplies);

  return (
    <div>
      <div className="comment-count flex gap-10 items-center mb-5">
        <h1 className="text-xl font-semibold">{commentCount} Comments</h1>
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

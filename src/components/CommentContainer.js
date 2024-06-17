import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CommentContainer = ({ comment }) => {
  //   console.log(comment);
  //   console.log(GOOGLE_API_KEY);
  const [commentCount, GOOGLE_API_KEY] = comment;

  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const COMMENT_API = `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=50`;

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(COMMENT_API);
    const jsonData = await data.json();
    console.log(jsonData.items);
    setComments(jsonData.items);
  };
  comments.map((coment) => console.log(coment.snippet.topLevelComment.snippet));
  return (
    <div className="comment-container">
      <div className="comment-count"></div>
    </div>
  );
};

export default CommentContainer;

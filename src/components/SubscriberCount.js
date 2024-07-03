import React, { useCallback, useEffect, useState } from "react";
// import { json } from "react-router-dom";

const SubscriberCount = ({ item }) => {
  //   console.log(item);
  const channelId = item;
  const GOOGLE_API_KEY = "AIzaSyCmHAf5n_sGXXa6Rig9ACqJ_wStD97y3ZQ";
  const SUBSCRIBER_COUNT_API = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${GOOGLE_API_KEY}`;

  const [subscribersCount, setSubscribersCount] = useState([]);

  const getSubscriberCount = useCallback(async () => {
    const data = await fetch(SUBSCRIBER_COUNT_API);
    const jsonData = await data.json();
    setSubscribersCount(jsonData.items);
  }, [SUBSCRIBER_COUNT_API]);

  useEffect(() => {
    getSubscriberCount();
  }, [getSubscriberCount]);

  function formatViews(subCount) {
    if (subCount >= 1000000) {
      return (subCount / 1000000).toFixed(1) + "M";
    } else if (subCount >= 1000) {
      return Math.round(subCount / 1000) + "K";
    } else {
      return subCount.toString();
    }
  }

  const subCount = subscribersCount.map(
    (item) => item.statistics.subscriberCount
  );
  return <div>{formatViews(subCount)} subscribers</div>;
};

export default SubscriberCount;

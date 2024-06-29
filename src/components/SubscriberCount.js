import React, { useCallback, useEffect, useState } from "react";
// import { json } from "react-router-dom";

const SubscriberCount = ({ item }) => {
  //   console.log(item);
  const channelId = item;
  const GOOGLE_API_KEY = "AIzaSyDUfAMkZHrrPIDR_wcVuVBsHcUiiCJHfUQ";
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

  function formatViews(viewCount) {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(2) + "M";
    } else if (viewCount >= 1000) {
      return Math.round(viewCount / 1000) + "K";
    } else {
      return viewCount.toString();
    }
  }

  const subCount = subscribersCount.map(
    (item) => item.statistics.subscriberCount
  );
  return <div>{formatViews(subCount)} subscribers</div>;
};

export default SubscriberCount;

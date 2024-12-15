export const GOOGLE_API_KEY = "AIzaSyBRFXOk9nSoMnQTPA-lXCdRTCs5ZCVn37M";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// export const VIDEO_DETAILS = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${}&key=${GOOGLE_API_KEY}`

export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=" +
  GOOGLE_API_KEY;

// "https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";

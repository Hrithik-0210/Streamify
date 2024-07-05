export const GOOGLE_API_KEY = "AIzaSyCJQZxWk4OhtcKKQxThhUgla9M7N2PUQTg";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// export const VIDEO_DETAILS = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${}&key=${GOOGLE_API_KEY}`

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";

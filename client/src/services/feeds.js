import axios from "axios/index";
import { YOUTUBE_API_KEY } from "../config/api";

const validateChannel = (items, query) => {
  const result = items.filter(item => {
    return item.id.kind === "youtube#channel" && item.snippet.title === query;
  });
  return result[0].id.channelId;
};

const getLatestVideos = (items, channelId) => {
  const result = items.filter(
    item =>
      item.id.kind === "youtube#video" && item.snippet.channelId === channelId
  );
  result.sort(function(a, b) {
    return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
  });
  return result;
};

const getYoutubeChannel = async query => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${YOUTUBE_API_KEY}`
    );

    if (res.data && res.data.items) {
      const channelId = validateChannel(res.data.items, query);
      return getLatestVideos(res.data.items, channelId);
    }
    return null;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default {
  getYoutubeChannel
}

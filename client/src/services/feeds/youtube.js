// @flow

import axios from "axios/index";
import { YOUTUBE_API_KEY } from "../../config/api";
import { List, Map } from "immutable";

const validateChannel = (items, query) => {
  const result = items.filter(item => {
    return item.id.kind === "youtube#channel" && item.snippet.title === query;
  });
  return result[0].id.channelId;
};

const getLatestVideos = (items, channelId: string) => {
  const result = items.filter(
    item =>
      item.id.kind === "youtube#video" && item.snippet.channelId === channelId
  );
  result.sort(function(a, b) {
    return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
  });
  return List(result.map(item => massage(item)));
};

const massage = youtubeVideoObject => {
  return Map({
    type: "youtube",
    id: youtubeVideoObject.id.videoId,
    title: youtubeVideoObject.snippet.title,
    thumbnail: youtubeVideoObject.snippet.thumbnails.default
  });
};
/*
{
  "kind": "youtube#searchResult",
  "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/bP8QC8-wmzpBBMP7iylDfVoyn0E\"",
  "id": {
    "kind": "youtube#video",
    "videoId": "zRGN1b6prmM"
  },
  "snippet": {
    "publishedAt": "2018-05-26T18:00:01.000Z",
    "channelId": "UCWiPkogV65gqqNkwqci4yZA",
    "title": "FIGHT THE GOLEM KING BOSS! - Moonlighter (Have A Gander)",
    "description": "If you want to get the game + 10% off (as well as help me out) then visit: ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/zRGN1b6prmM/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/zRGN1b6prmM/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/zRGN1b6prmM/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "InTheLittleWood",
    "liveBroadcastContent": "none"
  }
}
*/
export const getYoutube = (query: string): Promise<Response> => {
  return axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${YOUTUBE_API_KEY}`
    )
    .then(res => {
      if (res.data && res.data.items) {
        const channelId = validateChannel(res.data.items, query);
        if (!channelId) return null;
        return getLatestVideos(res.data.items, channelId);
      }
    })
    .catch(e => {
      console.log(e);
      throw e;
    });
};

export default getYoutube;

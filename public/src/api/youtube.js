import axios from "axios";

const key = "AIzaSyDgoHse5BvKz3GX83ncNrzjubQnQ12A6HE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    topicId: "/m/04rlf",
    maxResults: 8,
    key: key,
  },
  headers: {},
});

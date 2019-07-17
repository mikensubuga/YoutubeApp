import axios from "axios";

const KEY = "AIzaSyDP38Q6fRVtUdXn6sYIyoeYGobtdaL_L9U";
const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

export default youtube;

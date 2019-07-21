import * as actionTypes from "./actionTypes";
import youtube from "../../apis/youtube";

export const fetchVideosStart = () => {
  return {
    type: actionTypes.FETCH_VIDEOS_START
  };
};

export const fetchVideosFail = error => {
  return {
    type: actionTypes.FETCH_VIDEOS_FAIL,
    error: error
  };
};
export const fetchVideosSuccess = (videos, selectedVideo) => {
  return {
    type: actionTypes.FETCH_VIDEOS_SUCCESS,
    videos: videos,
    selectedVideo: selectedVideo
  };
};

export const fetchVideos = term => {
  return dispatch => {
    dispatch(fetchVideosStart());
    const KEY = "AIzaSyDP38Q6fRVtUdXn6sYIyoeYGobtdaL_L9U";
    youtube
      .get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          key: KEY
        }
      })
      .then(res => {
        let fetchedVideos = [];

        // fetchedVideos = [...res.data.items];
        // fetchedVideos.push(res.data.items[key]);

        fetchedVideos = [...res.data.items];
        const selectedVideo = res.data.items[0];
        dispatch(fetchVideosSuccess(fetchedVideos, selectedVideo));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchVideosFail(err));
      });
  };
};

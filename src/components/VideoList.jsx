import React from "react";
import VideoItem from "./VideoItem";
const VideoList = props => {
  const videos = props.videos.map(video => {
    return <VideoItem key={video.id} video={video} />;
  });
  return <div className="ui relaxed divided list">{videos}</div>;
};
export default VideoList;

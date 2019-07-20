import React from "react";
import VideoItem from "../VideoItem/VideoItem";
const VideoList = props => {
  console.log("video list", props.videos);
  const videos = props.videos.map(video => {
    return (
      <VideoItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{videos}</div>;
};
export default VideoList;

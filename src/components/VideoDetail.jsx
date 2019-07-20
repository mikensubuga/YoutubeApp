import React from "react";
import Skeleton from "react-loading-skeleton";
const VideoDetail = props => {
  if (!props.video) {
    return "Loading...";
  }
  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  let videoDetails = (
    <div className="ui segment">
      <h4 className="ui header">
        <Skeleton height={20} />
      </h4>
      <p>
        <Skeleton count={2} />
      </p>
    </div>
  );
  if (!props.loading) {
    videoDetails = (
      <div className="ui segment">
        <h4 className="ui header"> {props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    );
  }
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      {videoDetails}
    </div>
  );
};

export default VideoDetail;

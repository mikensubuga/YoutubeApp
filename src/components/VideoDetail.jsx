import React, { Component } from "react";

const VideoDetail = props => {
  if (!props.video) {
    return "Loading...";
  }
  const videoSrc = `https://www.youtube.com/embed/${props.video.id}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src="" />
      </div>
      <div className="ui segment">
        <h4 className="ui header"> {props.video.name}</h4>
        <p>{props.video.detail}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

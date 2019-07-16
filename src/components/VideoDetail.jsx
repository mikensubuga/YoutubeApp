import React, { Component } from "react";

const VideoDetail = props => {
  if (!props.video) {
    return "Loading...";
  }
  return <div>{props.video.name}</div>;
};

export default VideoDetail;

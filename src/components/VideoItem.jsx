import React, { Component } from "react";
import "./VideoItem.css";
const VideoItem = props => {
  return (
    <div
      className="video-item item"
      onClick={() => props.onVideoSelect(props.video)}
    >
      <img className="ui image" src="nothing" alt="link to image" />

      <div className="content">
        <div className="header">{props.video.name}</div>
      </div>
    </div>
  );
};

export default VideoItem;

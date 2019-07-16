import React, { Component } from "react";

const VideoDetail = props => {
  if (!props.video) {
    return "Loading...";
  }
  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header"> {props.video.name}</h4>
        <p>{props.video.detail}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

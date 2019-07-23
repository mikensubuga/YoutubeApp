import React from "react";
import "./VideoItem.css";

const VideoItem = props => {
  const imageURL = props.video.snippet.thumbnails.medium.url;
  return (
    <div
      className="ui item"
      onClick={() => props.onVideoSelect(props.video)}
      style={{ cursor: "pointer" }}
    >
      <img
        className="ui image"
        src={imageURL}
        alt={props.video.snippet.title}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

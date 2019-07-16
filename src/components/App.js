import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
class App extends Component {
  state = {
    videos: [
      {
        id: 1,
        name: "video1"
      },
      {
        id: 2,
        name: "video2"
      }
    ],
    selectedVideo: null
  };

  onTermSubmit = term => {
    youtube
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(res => this.setState({ videos: res.data }))
      .catch(err => console.log(err));
  };
  onVideoSelect = hi => {
    console.log("From the app" + hi.name);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length} videos
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;

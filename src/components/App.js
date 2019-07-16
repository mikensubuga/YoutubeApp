import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
class App extends Component {
  state = {
    videos: []
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
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.length} videos
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

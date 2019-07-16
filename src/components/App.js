import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";
class App extends Component {
  state = {
    videos: [
      {
        id: 1,
        name: "video1",
        detail: "This is a detail for Video 1"
      },
      {
        id: 2,
        name: "video2",
        detail: "This is a detail for Video 2"
      },
      {
        id: 3,
        name: "video3",
        detail: "This is a detail for Video 3"
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
  onVideoSelect = video => {
    console.log("From the app ", video);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

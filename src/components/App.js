import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";
class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = term => {
    const KEY = "AIzaSyDP38Q6fRVtUdXn6sYIyoeYGobtdaL_L9U";

    youtube
      .get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          key: KEY
        }
      })
      .then(res => {
        this.setState({
          videos: res.data.items,
          selectedVideo: res.data.items[0]
        });
      })
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

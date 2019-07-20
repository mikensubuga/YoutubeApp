import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import VideoList from "./Video/VideoList/VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./Video/VideoDetail/VideoDetail";
import Loader from "./UI/Loader/Loader";
class App extends Component {
  state = {
    loading: false,
    videos: [],
    selectedVideo: null
  };
  componentDidMount() {
    this.onTermSubmit("post malone");
  }

  onTermSubmit = term => {
    const KEY = "AIzaSyDP38Q6fRVtUdXn6sYIyoeYGobtdaL_L9U";
    this.setState({ loading: true });
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
          selectedVideo: res.data.items[0],
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
  };
  onVideoSelect = video => {
    console.log("From the app ", video);
    this.setState({ selectedVideo: video });
  };
  render() {
    let VideoL = <Loader />;
    if (!this.state.loading) {
      VideoL = (
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      );
    }
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail
                video={this.state.selectedVideo}
                loading={this.state.loading}
              />
            </div>
            <div className="five wide column">{VideoL}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
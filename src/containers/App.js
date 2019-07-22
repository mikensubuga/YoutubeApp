import React, { Component } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import VideoList from "../components/Video/VideoList/VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "../components/Video/VideoDetail/VideoDetail";
import Loader from "../components/UI/Loader/Loader";

import * as actions from "../store/actions/video";
import { connect } from "react-redux";

class App extends Component {
  // state = {
  //   loading: false,
  //   videos: [],
  //   selectedVideo: null
  // };
  componentDidMount() {
    this.props.onTermSubmit("ed sheeran");
    // this.onTermSubmit("post malone");
  }

  // onTermSubmit = term => {
  //   const KEY = "AIzaSyDP38Q6fRVtUdXn6sYIyoeYGobtdaL_L9U";
  //   this.setState({ loading: true });
  //   youtube
  //     .get("/search", {
  //       params: {
  //         q: term,
  //         part: "snippet",
  //         maxResults: 5,
  //         key: KEY
  //       }
  //     })
  //     .then(res => {
  //       this.setState({
  //         videos: res.data.items,
  //         selectedVideo: res.data.items[0],
  //         loading: false
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState({ loading: false });
  //     });
  // };
  onVideoSelect = video => {
    console.log("From the app ", video);
    this.setState({ selectedVideo: video });
  };
  render() {
    let VideoL = <Loader />;
    if (!this.props.loading) {
      VideoL = (
        <VideoList
          videos={this.props.videos}
          onVideoSelect={this.onVideoSelect}
        />
      );
    }
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.props.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail
                video={this.props.selectedVideo}
                loading={this.props.loading}
              />
            </div>
            <div className="five wide column">{VideoL}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.loading,
    videos: state.videos,
    selectedVideo: state.selectedVideo
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTermSubmit: term => {
      dispatch(actions.fetchVideos(term));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

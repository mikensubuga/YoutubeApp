import React, { Component } from "react";
class SearchBar extends Component {
  state = {
    term: ""
  };
  onInputChange = event => {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={event => this.onInputChange(event)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

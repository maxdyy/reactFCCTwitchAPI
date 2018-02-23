import React, {Component} from 'react';
import {Input} from 'antd';
import 'antd/dist/antd.css';
import '../css/SearchBar.css';

const Search = Input.Search;

class SearchBar extends Component {
  render() {
    return (
    <div className="SearchBarWrapper">
      <Search
        placeholder="Search Twitch for user"
        enterButton="Search"
        size="large"
        onSearch={value => this.props.onUserSearch(value)}
      />
    </div>)
  }
}

export default SearchBar;

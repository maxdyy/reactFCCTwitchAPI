import React, {Component} from 'react';
import './css/App.css';
import axios from 'axios';
import SearchBar from './components/searchBar';
import UserCard from './components/card';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      stream: {}
    };

    this.userSearch('freecodecamp');
  }

  userSearch(value) {
    if(!value) {
      return
    } else {
      value = value.replace(/\s/g, "");
      axios.get(`https://wind-bow.glitch.me/twitch-api/channels/${value}`)
           .then(data => this.setState({
             user: data.data,
           }));
      axios.get(`https://wind-bow.glitch.me/twitch-api/streams/${value}`)
           .then(data => this.setState({
             stream: data,
           }));
    }
  }

  render() {
    const userSearch = value => this.userSearch(value);
    return (
    <div className="App">
      <SearchBar onUserSearch={userSearch}/>
      <UserCard
        user={this.state.user}
        stream={this.state.stream}
      />
    </div>);
  }
}

export default App;

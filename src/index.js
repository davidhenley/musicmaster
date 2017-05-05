import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';

import Profile from './components/Profile';
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';

class App extends Component {
  state = {
    artist: null,
    tracks: []
  }

  setArtist = (artist) => {
    this.setState({ artist });
  }

  setTopTracks = (tracks) => {
    this.setState({ tracks });
  }

  render() {
    return (
      <div className="App container">
        <div className="Title">Music Master</div>
        <SearchForm setArtist={this.setArtist} setTopTracks={this.setTopTracks} />
        <Profile artist={this.state.artist} />
        <Gallery tracks={this.state.tracks} />
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));

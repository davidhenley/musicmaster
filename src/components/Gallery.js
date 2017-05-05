import React, { Component } from 'react';

class Gallery extends Component {
  state = {
    playingUrl: '',
    audio: null,
    playing: false
  }

  playAudio(track) {
    let audio = new Audio(track);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        playingUrl: track,
        audio
      });
    } else {
      if (this.state.playingUrl === track) {
        this.state.audio.pause();
        this.setState({
          playing: false
        })
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playingUrl: track,
          playing: true,
          audio
        })
      }
    }
  }

  renderTracks() {
    const { tracks } = this.props;
    return tracks.map((track, i) =>
      <div key={i} className="Track" onClick={() => this.playAudio(track.preview_url)}>
        <img
          src={track.album.images[0].url}
          className="Track-Image"
          alt="Track"
        />
        <div className="Track-Play">
          <div className="Track-Play-Inner">
            {
              this.state.playingUrl === track.preview_url
                ? <span><b>| |</b></span> : <span>&#9654;</span>
            }
          </div>
        </div>
        <p className="Track-Text">
          {track.name}
        </p>
      </div>
    );
  }

  render() {
    const { tracks } = this.props;

    if (tracks.length === 0) return null;

    return (
      <div className="Gallery">
        {this.renderTracks()}
      </div>
    );
  }
}

export default Gallery;

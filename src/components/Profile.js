import React, { Component } from 'react';

class Profile extends Component {
  renderGenres() {
    const { genres } = this.props.artist;
    return genres.map((genre, i) => {
      const separator = i !== genres.length - 1 ? ', ' : '';
      return <span key={i}>{genre}{separator}</span>;
    });
  }

  render() {
    const { artist } = this.props;

    if (!artist) return null;

    return (
      <div className="Profile">
        <div className="Main">
          <img
            alt="Profile"
            className="Image"
            src={artist.images[0].url}
          />
          <div className="Info">
            <div className="Name">{artist.name}</div>
            <div className="Followers">{artist.followers.total} followers</div>
            <div className="Genres">{this.renderGenres()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

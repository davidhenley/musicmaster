import React, { Component } from 'react';
import qs from 'qs';
import axios from 'axios';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class SearchForm extends Component {
  state = {
    query: ''
  }

  search = async () => {
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const QUERY_PARAMS = qs.stringify({
      q: this.state.query,
      type: 'artist',
      limit: 1
    });

    let response;
    response = await axios.get(`${BASE_URL}${QUERY_PARAMS}`);
    const artist = response.data.artists.items[0];
    response = await axios.get(`https://api.spotify.com/v1/artists/${response.data.artists.items[0].id}/top-tracks?&country=US`);
    const tracks = response.data.tracks;

    this.props.setArtist(artist);
    this.props.setTopTracks(tracks);

    this.setState({ query: '' })
  }

  render() {
    return (
      <div className="SearchForm">
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.query}
              onChange={event => this.setState({ query: event.target.value })}
              placeholder="Search for an Artist"
              onKeyPress={event => event.key === 'Enter' ? this.search(event) : null}
            />
            <InputGroup.Addon onClick={this.search}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

export default SearchForm;

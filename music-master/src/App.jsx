import React, { Component } from 'react';

import { 
  FormGroup,
  FormControl,
  InputGroup,
  Glyphicon
} from 'react-bootstrap';

import Profile from './Profile';

import { AUTHORIZATION_TOKEN } from './shared/secret_spotify_token';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null
    }
  }

  search() {
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;

    const myOptions = {
      method: 'GET',
      headers: {
        'Authorization': AUTHORIZATION_TOKEN,
      },
      mode: 'cors',
      cache: 'default'
    }

    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        console.log('artist', artist);
        this.setState({ artist });
      });
  }

  render() {
    return (
      <div className='App'>
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl 
              type='text'
              placeholder='Search for an Artist'
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph='search'></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Profile 
          artist={this.state.artist}
        />
        <div className="Galery">
          Gallery
        </div>
      </div>
    );
  }
}

export default App;
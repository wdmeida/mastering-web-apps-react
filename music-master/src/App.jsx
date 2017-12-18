import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-title">Music Master</div>
        <div>
          <input type="text" placeholder='search an artist...'/>
          <button>Submit</button>
        </div>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Galery">
          Gallery
        </div>
      </div>
    );
  }
}

export default App;
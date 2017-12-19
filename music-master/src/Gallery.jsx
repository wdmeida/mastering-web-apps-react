import React, { Component } from 'react';

import './App.css';

class Gallery extends Component {
  playAudio(previewUrl) {
    let audio = new Audio(previewUrl);
    audio.play();
  }

  render() {
    const { tracks } = this.props;
    return (
      <div>
        {tracks.map((track, index) => {
          const trackImg = track.album.images[0].url;
          return (
            <div
              key={index}
              className='track'
              onClick={() => this.playAudio(track.preview_url)}
            >
              <img 
                src={trackImg} 
                className='track-img'
                alt='Track'
              />
              <p className="track-text">
                {track.name}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
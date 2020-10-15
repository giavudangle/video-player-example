import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends Component {

  state = {
    videos:[]
  }

  _getYoutubeVideos = async (term) => {
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    })
    this.setState({videos : response.data.items})
  }

  _onTermSubmit = term => {
    this._getYoutubeVideos(term);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this._onTermSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;

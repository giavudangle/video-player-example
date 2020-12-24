import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {

  state = {
    videos:[],
    selectedVideo:null
  }

  _getYoutubeVideos = async (term) => {
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    })
    this.setState({
      videos : response.data.items,
      selectedVideo:response.data.items[0]
    })
  }

  componentDidMount(){
    this._getYoutubeVideos('macbook')
  }

  _onTermSubmit = term => {
    this._getYoutubeVideos(term);
  }

  _onVideoSelect = (video) => {
    this.setState({selectedVideo:video})
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this._onTermSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo}/>
            </div>      
            <div className='five wide column'>
              <VideoList 
              onVideoSelect={this._onVideoSelect} 
              videos={this.state.videos}/>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;

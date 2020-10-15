import axios from 'axios';

const YOUTUBE_KEY = "AIzaSyDaiETPytmNiQutkA1Hcce9T8dzCBiVLEU";

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:20,
    key:YOUTUBE_KEY,
    type:'video'
  }
})
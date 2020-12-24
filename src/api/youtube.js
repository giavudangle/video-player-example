import axios from 'axios';

const YOUTUBE_KEY = "AIzaSyBxE-NIPFI4_RElaKOqvpkOJm6LWDthllA";

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:20,
    key:YOUTUBE_KEY,
    type:'video'
  }
})
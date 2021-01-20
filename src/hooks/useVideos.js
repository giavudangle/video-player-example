import React,{useState,useEffect} from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    const searchVideos = async (term) => {
        const response = await youtube.get('/search', {
          params: {
            q: term
          }
        })
        setVideos(response.data.items);
      }
    

    useEffect(() => {
        searchVideos(defaultSearchTerm);
      }, [])


    return [videos,searchVideos];
}

export default useVideos;
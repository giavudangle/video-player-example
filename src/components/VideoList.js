import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos}) => {
  const renderItem = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} />
  })
  return (
    <div>
      {renderItem}
    </div>
  )
}
export default VideoList;

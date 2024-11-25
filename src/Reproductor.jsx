import React from 'react'
import ReactPlayer from 'react-player';

const Reproductor = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
    controls
    width={1080}
    height={1000} />
  )
}

export default Reproductor
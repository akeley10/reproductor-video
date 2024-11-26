import * as React from 'react';
import {useState} from 'react'
import ReactPlayer from 'react-player';







const Reproductor = () => {
  return (
    <>
   
    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
    controls
    width={1000}
    height={500} 
    loop={false}
    />
     <button>Change Video</button>
     <button>Start</button>
     <button>Pause</button>
     <button>Reset</button>
    </>
  )

}

export default Reproductor
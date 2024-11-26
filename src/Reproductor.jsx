import * as React from 'react';
import {useState} from 'react'
import ReactPlayer from 'react-player';
import '../src/reproductor.css'


const Reproductor = () => {
  const [url ,setUrl] = useState("Pon una url");
  const [playing, setPlaying] = useState(false);
  const [videoState, setVideoState] = useState('Video no started');


  const handleStart = () => {
    setVideoState('playing');
  }

  const handlePlay = () => {
    setPlaying(true);
    setVideoState('playing');
  }

  const handlePause = () => {
    setPlaying(false);
    setVideoState('Paused');
  }

  return (
    <>
    <p>Video Status: {videoState}</p>
    <ReactPlayer url={url}
    width={1000}
    height={500} 
    playing={playing}
    controls={true}
    onStart={handleStart}
    onPlay={handlePlay}
    onPause={handlePause}
    
    />
    <div class="menu-reproductor">
    <input
    placeholder="Pon una url"
    type="text"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
   />
     <button onClick={() =>setPlaying(!playing)}>{playing ? 'Pause':'Play'}</button>
     </div>
    </>
  )

}

export default Reproductor
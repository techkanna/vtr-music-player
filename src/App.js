import React, { useRef, useState } from 'react';
import './App.css';

import MusicList from './library/MusicList';
import Info from './components/Info';
import Nav from './components/Nav';

function App() {
  const [songIndex, setSongIndex] = useState(2);
  const [playing, setPlaying] = useState(false);
  const audio = useRef();
  const [progress, setProgress] = useState(0);

  const updateProgress = (e) => {
    // e.persist();
    const { duration, currentTime } = e.target;
    const progressPercent = (currentTime / duration) * 100;
    setProgress(progressPercent);
  };

  const nextSong = () => {
    setSongIndex((i) => {
      i = i + 1;
      if (i > MusicList.length - 1) {
        i = 0;
      }
      return i;
    });
    setPlaying(true);
    audio.current.autoplay = true;
  };

  return (
    <>
      <h1>Music Player</h1>
      <div className={`music-container ${playing ? 'play' : ''}`}>
        <audio
          ref={audio}
          onTimeUpdate={updateProgress}
          src={MusicList[songIndex].m}
          onEnded={nextSong}
        ></audio>
        <Info
          songTitle={MusicList[songIndex].t}
          progress={progress}
          audio={audio}
        />

        <div className="img-container">
          <img src={MusicList[songIndex].i} alt="music-cover" />
        </div>

        <Nav
          playing={playing}
          setSongIndex={setSongIndex}
          audio={audio}
          setPlaying={setPlaying}
          songsCount={MusicList.length}
          nextSong={nextSong}
        />
      </div>
    </>
  );
}

export default App;

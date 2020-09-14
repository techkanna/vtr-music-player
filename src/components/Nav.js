import React from 'react';

function Nav(props) {
  const {
    playing,
    setPlaying,
    audio,
    setSongIndex,
    songsCount,
    nextSong,
  } = props;

  const handlePlay = () => {
    if (playing) {
      // pauseSong
      setPlaying(false);
      audio.current.pause();
    } else {
      // playSong
      setPlaying(true);
      audio.current.play();
    }
  };

  const prevSong = () => {
    setSongIndex((i) => {
      i = i - 1;
      if (i < 0) {
        i = songsCount - 1;
      }
      return i;
    });
    setPlaying(true);
    audio.current.autoplay = true;
  };

  return (
    <div className="navigation">
      <button onClick={prevSong} className="action-btn">
        <i className="fas fa-backward"></i>
      </button>
      <button onClick={handlePlay} className="action-btn action-btn-big">
        <i className={`fas ${playing ? 'fa-pause' : 'fa-play'}`}></i>
      </button>
      <button onClick={nextSong} className="action-btn">
        <i className="fas fa-forward"></i>
      </button>
    </div>
  );
}

export default Nav;

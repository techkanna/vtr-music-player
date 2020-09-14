import React from 'react';

function Info({ songTitle, progress, audio }) {
  function setProgress(e) {
    // e.persist();
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audio.current.duration;

    audio.current.currentTime = (clickX / width) * duration;
  }
  return (
    <div className="music-info">
      <h4>{songTitle}</h4>
      <div className="progress-container" onClick={setProgress}>
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Info;

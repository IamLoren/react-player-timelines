import './App.css';
import ReactPlayer from 'react-player';
import Timelines from './components/Timelines';
import { useRef } from 'react';

function App() {
  const playerRef = useRef<ReactPlayer>(null);
  
  const handleTimeClick = (seconds: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds);
      // Опціонально можемо починати відтворення, якщо відео на паузі
      playerRef.current.getInternalPlayer().playVideo();
    }
  };

  return (
    <>
      <h1>Hello World</h1>
      <ReactPlayer 
        ref={playerRef}
        url='https://youtu.be/pvHu0t9_ewU?si=NavDGWmdlqFe8Eb_' 
        controls={true}
        config={{
          youtube: {
            playerVars: {
              controls: 1,
              showinfo: 1,
              disablekb: 0,
              autohide: 0
            }
          }
        }}
      />
      <Timelines onTimeClick={handleTimeClick} />
    </>
  )
}

export default App;

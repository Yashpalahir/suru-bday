import React, { useState } from 'react';
import StarBackground from './components/StarBackground';
import Opening from './components/Opening';
import Timeline from './components/Timeline';
import Special from './components/Special';
import Gallery from './components/Gallery';
import LoveLetter from './components/LoveLetter';
import Finale from './components/Finale';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    const timeline = document.getElementById('timeline');
    if (timeline) {
      timeline.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
      <StarBackground />
      <AudioPlayer play={started} />

      <Opening onStart={handleStart} />

      <div style={{ opacity: started ? 1 : 0, transition: 'opacity 1s ease-in-out', pointerEvents: started ? 'all' : 'none' }}>
        <Timeline />
        <Special />
        <Gallery />
        <LoveLetter />
        <Finale />
      </div>
    </div>
  );
}

export default App;

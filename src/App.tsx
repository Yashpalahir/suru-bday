import { useState } from 'react';
import StarBackground from './components/StarBackground';
import Opening from './components/Opening';
import Timeline from './components/Timeline';
import Special from './components/Special';
import Gallery from './components/Gallery';
import LoveLetter from './components/LoveLetter';
import Finale from './components/Finale';
import AudioPlayer from './components/AudioPlayer';
import FloatingLanterns from './components/FloatingLanterns';
import FloatingHearts from './components/FloatingHearts';
import GiftBox from './components/GiftBox';
import HeartTrail from './components/HeartTrail';
import MessageJar from './components/MessageJar';
import RosePetals from './components/RosePetals';
import SweetPromises from './components/SweetPromises';
import LoveMascot from './components/LoveMascot';
import FutureMemories from './components/FutureMemories';
import DigitalHug from './components/DigitalHug';
import LoveCoupons from './components/LoveCoupons';
import TimeCapsule from './components/TimeCapsule';
import SoulmateSupernova from './components/SoulmateSupernova';







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
      <FloatingHearts />
      <RosePetals />
      <HeartTrail />
      <LoveMascot />
      <AudioPlayer play={started} />

      <Opening onStart={handleStart} />

      <div style={{ opacity: started ? 1 : 0, transition: 'opacity 1s ease-in-out', pointerEvents: started ? 'all' : 'none' }}>
        <Timeline />
        <TimeCapsule />
        <Special />
        <SweetPromises />
        <Gallery />
        <FutureMemories />
        <MessageJar />
        <DigitalHug />
        <LoveCoupons />
        <FloatingLanterns />
        <GiftBox />
        <LoveLetter />
        <SoulmateSupernova />
        <Finale />
      </div>
    </div>
  );
}

export default App;

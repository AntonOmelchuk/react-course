
import { useState } from 'react';
import './App.css'
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Tracks from './components/Tracks/Tracks';
import MainLayout from './layout/MainLaoyut';
import type { ITrack } from './interfaces/ITrack';

export function App() {
  const [selectedTrack, setSelectedTrack] = useState<null | ITrack>(null)

  const onTrackSelect = (track: ITrack) => {
    setSelectedTrack(track);
  }

  return (
    <MainLayout>
      <Header />
      {selectedTrack && <Details selectedTrack={selectedTrack} />}
      <Tracks selectedTrack={selectedTrack} onTrackSelect={onTrackSelect} />
    </MainLayout>
  )
}

export default App

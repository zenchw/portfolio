import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OttertunityPage from './components/OttertunityPage/OttertunityPage';
import HiSayang from './components/HiSayang/HiSayang';
import MNightPage from './components/MNightPage/MNightPage';
import LobbyPage from './components/LobbyPage/LobbyPage';

function App() {
  return (
    <Routes>
      <Route path="/lobby" element={<LobbyPage />} /> 
      <Route path="/ottertunity" element={<OttertunityPage />} />
      <Route path="mnight" element={<MNightPage />} />
      <Route path="/hisayang" element={<HiSayang />} />
    </Routes>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OttertunityPage from './components/OttertunityPage/OttertunityPage';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />  */}
      <Route path="/ottertunity" element={<OttertunityPage />} />
    </Routes>
  );
}

export default App;

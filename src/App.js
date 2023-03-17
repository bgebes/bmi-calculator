import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WITB from './pages/WITB';
import History from './pages/History';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/what-is-the-bmi" exact element={<WITB />} />
      <Route path="/history" exact element={<History />} />
      <Route path="*" element={<div>404 not found</div>} />
    </Routes>
  );
}

export default App;

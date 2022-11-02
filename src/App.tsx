import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Certificates from './pages/Certificates/Certificates';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

import styles from './App.module.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </div>
  );
}

export default App;

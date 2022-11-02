import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import Certificates from './pages/Certificates'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {

  return (
    <div className="App">
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/certificates">Certificates</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </div>
  )
}

export default App

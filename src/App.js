import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App

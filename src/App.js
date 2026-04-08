import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/service"}>Service</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path='/about' element={<About /> } />
        <Route path="/service" element={<Service /> } />
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path='/about' element={<About /> } />
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App

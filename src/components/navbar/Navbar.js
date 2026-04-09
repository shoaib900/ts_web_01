import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

            <li class="nav-item">
          <Link class="nav-link  active"  to={"/"}>Home</Link>
        </li>
            <li class="nav-item">
          <Link class="nav-link "  to={"/about"}>About</Link>
        </li>
            <li class="nav-item">
          <Link class="nav-link "  to={"/service"}>Service</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
           {/* <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/service"}>Service</Link></li>
      </ul> */}
      
    </div>
  )
}

export default Navbar

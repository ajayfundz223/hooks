import React from 'react'
import { NavLink } from 'react-router-dom'
import '../pages/App.css'

const Navbar = () => {
  return (
  <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <NavLink class="navbar-brand" to="/">Navbar</NavLink> */}
    <NavLink className="nav-link">Logo</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <NavLink className="nav-link" to="/about">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="nav-link" to="/fetchdata">FetchData</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar
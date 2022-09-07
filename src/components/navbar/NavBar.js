import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container-fluid">
    <Link className="navbar-brand" to="/">Street-Connect</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
     </nav>
    </div>
  )
}

export default NavBar
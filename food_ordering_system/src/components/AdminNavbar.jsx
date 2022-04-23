import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <div>
      <div style={{
        '--color-1': 'deepskyblue', '--color-2': 'gray',
        background: `
      linear-gradient(
        120deg,
        var(--color-1),
        var(--color-2) 80%
      )`
      }} className="container p-4 rounded-3">

<div className='ps-5 pe-5'>
        <div className='ps-5 pe-5'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">Hi, Admin</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link  className="nav-link active" aria-current="page" to="/admin/orders">Orders</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link active" aria-current="page" to="/admin/products">Products</Link>
                </li>
              </ul>
              <form className="d-flex ">
                <input className="form-control me-1 " type="search" placeholder="search order by id.." aria-label="Search" />
                <button className="btn btn-outline-success btn-sm" type="submit">Search </button>
              </form>
              <Link  className="nav-link active text-light" aria-current="page" to="/products">Logout</Link>
            </div>
          </div>
        </nav>
      </div>
      </div>
      </div>
    </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Firebase - APP</Link>
        </div>
      </nav>
    </>
  )
}

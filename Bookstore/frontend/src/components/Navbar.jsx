import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="header">
        <header>
            <h2>Book Store</h2>
            <Link to="/">
                <h1 className='nav-item'>Home</h1>
            </Link>

            {/* <Link to="/addBook">
                <h1 className='nav-item'>Add New Book</h1>
            </Link> */}
            <Link to="/blogs">
                <h1 className='nav-item'>Blogs</h1>
            </Link>

            <Link to="/signup">
                <h1 className='nav-item'>SignUp</h1>
            </Link>

            <Link to="/login">
                <h1 className='nav-item'>Login</h1>
            </Link>
            
        </header>
    </div>
  )
}

export default Navbar
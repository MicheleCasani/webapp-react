import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar bg-primary mb-4">
                <div className="container-fluid">
                    <Link className='navbar-brand'>Films Blog</Link>
                </div>
            </nav>
        </>
    )
}

export default Header

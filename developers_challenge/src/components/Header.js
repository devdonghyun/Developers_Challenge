import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div>
                <Link to='/'>
                    <h1>Developers Challenge</h1>
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/join'>Join</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
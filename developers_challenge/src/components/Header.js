import React from 'react'

const Header = () => {
    return (
        <header className='header'>
            <div>
                <a href='/'>
                    <h1>Developers Challenge</h1>
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/join'>Join</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
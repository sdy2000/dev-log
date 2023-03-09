import React from 'react'
import { IconButton, ThemeButton } from '../components'
import { BsList } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='container'>
            <nav className=''>
                <a className='' href="/"><span className=''>DEV</span> Log</a>
            </nav>

            <div className=''>
                <ThemeButton />
                <span>
                    <IconButton value={<BsList />} />
                </span>
            </div>

            <div>
                <ul>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
                <ThemeButton />
            </div>
        </header>
    )
}

export default Header
import React from 'react'
import { IconButton, ThemeButton } from '../components'
import { BsList } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import '../assets/global.css'

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

            <div className=''>
                <ul className=''>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
                <ThemeButton />
            </div>

            <div className=''>
                <IconButton value={<GrClose />} />
                <ThemeButton />
                <div>
                    <h3 className='text-xl font-extrabold text-lfp'>Main Menu</h3>
                    <ul>
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-extrabold text-lfp'>Topics</h3>
                    <ul>
                        <li><Link to="#">Database</Link></li>
                        <li><Link to="#">.Net Core</Link></li>
                        <li><Link to="#">React</Link></li>
                        <li><Link to="#">SQL Server</Link></li>
                        <li><Link to="#">SEO</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
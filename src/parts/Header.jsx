import React, { useEffect, useState } from 'react'
import { IconButton, SocialBox, ThemeButton } from '../components'
import { BsList } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import '../assets/global.css'

const Header = () => {
    const [isOpenList, setIsOpenList] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 640) {
                setIsOpenList(false);
            }
        })
    }, [])

    function OpenList() {
        (isOpenList === true) ? setIsOpenList(false) : setIsOpenList(true);
    }
    return (
        <header className=' bg-lbp dark:bg-dbp'>
            <div className='container'>
                <nav className='navbar flex justify-between items-start gap-3 p-3'>
                    <a className='logo text-lfp dark:text-dfp text-xl font-black' href="/">
                        <span className='text-accent'>DEV</span>
                        Log
                    </a>


                    <div className='btn-group flex items-center gap-3'>
                        <ThemeButton />
                        <span onClick={OpenList}>
                            <IconButton value={<BsList />} />
                        </span>
                    </div>

                    <div className='flex-wrapper hidden'>
                        <ul className='desktop-nav'>
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                        <ThemeButton />
                    </div>

                    <div className={`mobile-nav fixed inset-0 bg-lbp dark:bg-dbp py-16 px-5 overflow-auto
                     overscroll-contain z-10 border-l-2 border-l-las dark:border-l-lft
                     ${!isOpenList ? 'translate-x-[100%] invisible' : 'translate-x-[20%] visible'}`}>
                        <span onClick={OpenList} className='nav-close-btn absolute top-5 right-[25%]'>
                            <IconButton value={<IoMdClose />} />
                        </span>
                        <div className='mobile-nav-wrapper'>
                            <div className='flex flex-col gap-5 ml-[20%]'>
                                <img
                                    className='rounded-full border-2 border-lfp dark:border-lft'
                                    src="/assets/img/sdy2000.jpg"
                                    alt="User Avatar"
                                    width='120' height='120' />
                                <ul className='flex justify-start items-center gap-2'>
                                    <li><Link to="#">Login</Link></li>
                                    <li>\</li>
                                    <li><Link to="#">singout</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className='mobile-nav-wrapper'>
                            <h3 className='title'>Main Menu</h3>
                            <ul>
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                        </div>
                        <div className='mobile-nav-wrapper'>
                            <h3 className='title'>Topics</h3>
                            <ul>
                                <li><Link to="#">Database</Link></li>
                                <li><Link to="#">.Net Core</Link></li>
                                <li><Link to="#">React</Link></li>
                                <li><Link to="#">SQL Server</Link></li>
                                <li><Link to="#">SEO</Link></li>
                            </ul>
                        </div>

                        <div className='ml-[10%]'>
                            <SocialBox styles={'socail-icons flex items-center justify-center gap-3'} />

                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
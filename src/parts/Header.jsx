import React, { useEffect, useState } from 'react'
import { IconButton, SocialBox, ThemeButton } from '../components'
import { BsChevronDown, BsList } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import '../assets/global.css'
import useScrollDirection from '../utils/windowEvent/useScrollDirection'

const categores = [
    {
        id: 1,
        category: 'Database',
        subCategores: [
            'MS SQL Server', 'Mongo DB', 'My SQL Server', 'Apache'
        ]
    },
    {
        id: 2,
        category: 'Web Development',
        subCategores: [
            'React.js', 'Node.js', '.Net Core', 'Jango'
        ]
    },
    {
        id: 3,
        category: 'Mobile Development',
        subCategores: [
            'React Nativ', 'Zamarin', 'Katlin', 'Java'
        ]
    },
    {
        id: 4,
        category: 'Language',
        subCategores: [
            'C#', 'JavaScript', 'Phayton', 'Java'
        ]
    },
    {
        id: 5,
        category: 'SEO',
    },
]

const Header = () => {
    const [isOpenList, setIsOpenList] = useState(false);
    const [clickStates, setClickStates] = useState({})
    const scrollDirection = useScrollDirection();


    const handleOnClick = (id) => {
        if (clickStates[id] === true) {
            setClickStates({
                [id]: false
            });
        }
        else {
            setClickStates({
                [id]: !false
            });
        }
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                setIsOpenList(false);
            }
        })
    }, [])

    function OpenList() {
        (isOpenList === true) ? setIsOpenList(false) : setIsOpenList(true);
    }
    return (
        <header className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"}
         h-14 transition-all duration-500 bg-lbp dark:bg-dbp z-30`}>
            <div className='container'>
                <nav className='navbar flex justify-between items-start gap-3 p-3 md:pb-1'>
                    <div className='flex justify-center items-center gap-6'>
                        <a className='logo text-lfp dark:text-dfp text-xl xl:text-3xl font-black' href="/">
                            <span className='text-accent'>DEV</span>
                            Log
                        </a>
                        <ul className='desktop-nav  hidden lg:flex justify-center items-center gap-6 ml-12'>
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">Blogs</Link></li>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                        </ul>
                    </div>


                    <div className='btn-group flex items-center gap-3 lg:hidden'>
                        <ThemeButton />
                        <span onClick={OpenList}>
                            <IconButton value={<BsList />} />
                        </span>
                    </div>

                    <div className='flex-wrapper hidden lg:flex justify-center items-center gap-12'>

                        <span className='hidden lg:inline-block'>
                            <ThemeButton />
                        </span>

                        <ul className='accounting flex justify-start items-center gap-2'>
                            <li><Link to="#">Login</Link></li>
                            <li>\</li>
                            <li><Link to="#">singout</Link></li>
                        </ul>
                    </div>

                    <div className={`mobile-nav fixed inset-0 bg-lbp dark:bg-dbp py-16 px-5 overflow-auto
                     overscroll-contain z-10 border-l-2 border-l-las dark:border-l-lft lg:hidden
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
                                <li><Link to="#">Blogs</Link></li>
                                <li><Link to="#">Cooperation with DEVLog</Link></li>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                        </div>
                        <div className='mobile-nav-wrapper'>
                            <h3 className='title'>Topics</h3>
                            <ul className='header-bar flex flex-col justify-center items-start gap-2 text-lfp dark:text-dfp'>
                                {
                                    categores.map((cat) => (
                                        <li
                                            onClick={() => handleOnClick(cat.id)}
                                            key={cat.id} id={cat.id}>
                                            <Link to="#">{cat.category} {cat.subCategores && (<BsChevronDown />)}</Link>
                                            {cat.subCategores && (
                                                <ul className={`${!clickStates[cat.id] && 'hidden'} header-sub-bar`}>
                                                    {cat.subCategores.map((subCat, idx) => (
                                                        <li key={idx}>
                                                            <Link to='/#'>{subCat}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='ml-[10%] md:mr-[50%]'>
                            <SocialBox styles={'socail-icons flex items-center justify-center gap-3'} />

                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
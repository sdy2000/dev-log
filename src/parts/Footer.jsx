import React from 'react'
import { Link } from 'react-router-dom'
import { SocialBox } from '../components'

const Footer = () => {
  return (
    <footer className='bg-lbp dark:bg-dbp pt-8'>
      <div className='container px-4 py-8 grid gap-8 border-b-2 border-dfs dark:border-lfs sm:flex justify-center items-center'>
        <div className='wrapper sm:w-[50%]'>
          <a className='sm:text-start text-lfp dark:text-dfp text-2xl font-black' href="/">
            <span className='text-accent'>DEV</span>
            Log
          </a>
          <p className='sm:text-start text-sm text-lfs dark:text-dfs'>Learn about Web accessibility, Web performance, and Database management.</p>
        </div>

        <div className='wrapper sm:w-[25%]'>
          <p className='footer-title'>Quick Links</p>
          <ul>
            <li>
              <Link to='#' className='footer-link'>Advertise with us</Link>
            </li>
            <li>
              <Link to='#' className='footer-link'>About Us</Link>
            </li>
            <li>
              <Link to='#' className='footer-link'>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className='wrapper sm:w-[25%]'>
          <p className='footer-title'>Legal Stuff</p>
          <ul>
            <li>
              <Link to='#' className='footer-link'>Privacy Notice</Link>
            </li>
            <li>
              <Link to='#' className='footer-link'>Cookie Policy</Link>
            </li>
            <li>
              <Link to='#' className='footer-link'>Terms Of Use</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-4 pb-3 md:hidden'>
        <SocialBox styles={'socail-icons flex items-center justify-center gap-5'} />
      </div>
      <p className="text-lfp dark:text-dfp text-center pb-4 md:mt-4">&copy; Copyright 2022 <a href="/#"><span className='text-accent'>DEV</span>Log</a></p>
    </footer>
  )
}

export default Footer
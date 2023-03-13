import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-lbp dark:bg-dbp pt-8'>
      <div className='container px-4 py-8 grid gap-8 border-b-2 border-dfs dark:border-lfs'>
        <div className='wrapper'>
          <a className='logo text-lfp dark:text-dfp text-2xl font-black' href="/">
            <span className='text-accent'>DEV</span>
            Log
          </a>
          <p className='text-sm text-lfs dark:text-dfs'>Learn about Web accessibility, Web performance, and Database management.</p>
        </div>

        <div className='wrapper'>
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

        <div className='wrapper'>
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
      <div className='mt-4 pb-6 md:hidden'>
        <ul className='socail-icons flex items-center justify-center gap-5'>
          <li><a href='/#' className='socail-icon text-blue-700 hover:text-blue-900'><FaFacebook /></a></li>
          <li><a href='/#' className='socail-icon text-pink-700 hover:text-pink-900'><FaInstagram /></a></li>
          <li><a href='/#' className='socail-icon text-blue-600 hover:text-blue-8900'><FaTwitter /></a></li>
          <li><a href='/#' className='socail-icon text-green-700 hover:text-green-900'><FaWhatsapp /></a></li>
          <li><a href='/#' className='socail-icon text-sky-700 hover:text-sky-900'><FaLinkedin /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
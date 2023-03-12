import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { SocialIconButton } from '../components'

const Footer = () => {
  return (
    <footer className='bg-lbp dark:bg-dbp -mt-8 pt-8'>
      <div className='container px-4 py-8 grid gap-8 border-b-2 border-lfs dark:border-dfs'>
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
      <div className='mt-6 pb-6 md:hidden'>
        <ul className='flex items-center justify-center gap-3'>
          <li><SocialIconButton icon={<FaFacebook />} url="/#" color=' text-blue-700 hover:text-blue-900' /></li>
          <li><SocialIconButton icon={<FaInstagram />} url="/#" color=' text-pink-700 hover:text-pink-900' /></li>
          <li><SocialIconButton icon={<FaTwitter />} url="/#" color=' text-blue-600 hover:text-blue-800' /></li>
          <li><SocialIconButton icon={<FaWhatsapp />} url="/#" color=' text-green-700 hover:text-green-900' /></li>
          <li><SocialIconButton icon={<FaLinkedin />} url="/#" color=' text-sky-700 hover:text-sky-900' /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
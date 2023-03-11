import React from 'react'
import { Link } from 'react-router-dom'

const Button1 = ({ value, href, color = 'bg-accent text-white hover:bg-daccent' }) => {
  return (
    <span className={`${color} text-sm font-semibold rounded-2xl py-2 px-5 transition-all duration-300`}>
      <Link to={href}>
        {value}
      </Link>
    </span>
  )
}

export default Button1
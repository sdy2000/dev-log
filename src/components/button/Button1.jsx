import React from 'react'
import { Link } from 'react-router-dom'

const Button1 = ({ value, href, color = 'bg-accent text-white hover:bg-lft hover:text-lfp hover:border-lft border-accent ' }) => {
  return (
    <span className={`${color} text-sm font-semibold rounded-3xl py-2 px-5 transition-all duration-300 border-2 flex items-center justify-center`}>
      <Link to={href}>
        {value}
      </Link>
    </span>
  )
}

export default Button1
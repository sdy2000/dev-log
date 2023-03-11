import React from 'react'
import { Link } from 'react-router-dom'

const CardButton = ({ text, href }) => {
  return (
    <span className='text-xs font-semibold py-1 px-4 rounded-md transition-all duration-300
     text-lfs bg-lap hover:text-las hover:bg-lfs dark:text-dap dark:bg-lfs dark:hover:text-lfs dark:hover:bg-dap'>
      <Link to={href}>
        {text}
      </Link>
    </span>
  )
}

export default CardButton
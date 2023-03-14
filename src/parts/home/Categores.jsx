import React from 'react'
import { Aside } from '../../components'

const Categores = () => {
  return (
    <Aside title={'Categories'}>
      <ul className='text-lfs dark:text-dfs flex flex-col gap-1'>
        <li>Home</li>
        <li>Tob Blog</li>
        <li>Recent Blog</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </Aside>
  )
}

export default Categores
import React from 'react'
import {BiTime} from 'react-icons/bi'

const CardTime = ({dateTime}) => {
  return (
    <p className='text-xs font-semibold flex items-center gap-1'>
      <time dateTime={dateTime}>{dateTime}</time>
      <span className=''></span>
      <BiTime />
      <time dateTime='PT3M'>3 min</time>
    </p>
  )
}

export default CardTime
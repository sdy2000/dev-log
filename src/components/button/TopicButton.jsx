import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TopicButton = ({ topicName, topicIcon }) => {
    const [onHover, setOnHover] = useState(false)

    return (
        <Link to='#' className='grid grid-cols-6 my-3 rounded-xl shadow-lg overflow-hidden' onMouseOver={()=>{setOnHover(true)}} onMouseOut={()=>{setOnHover(false)}}>
            <div className={`${onHover ? 'bg-accent' : ' bg-lap dark:bg-lfs '} 
            col-span-1 text-xl text-lfs dark:text-lap p-4 flex justify-center items-center transition-all duration-500`}>
                {topicIcon}
            </div>
            <p className='col-span-5 font-semibold text-lfs dark:text-dfs bg-dfp dark:bg-lfp flex justify-start items-center pl-4'>{topicName}</p>
        </Link>
    )
}

export default TopicButton
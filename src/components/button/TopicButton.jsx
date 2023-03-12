import React from 'react'
import { Link } from 'react-router-dom'

const TopicButton = ({ topicName, topicIcon }) => {
    return (
        <Link to='' className='topic-btn'>
            <div className='icon-box'>
                {topicIcon}
            </div>
            <p>{topicName}</p>
        </Link>
    )
}

export default TopicButton
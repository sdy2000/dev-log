import React from 'react'

const SocialIconButton = ({ icon, url, color }) => {
    return (
        <span className=''>
            <a className={`${color} text-xl transition-all duration-300`} href={url}>
                {icon}
            </a>
        </span>
    )
}

export default SocialIconButton
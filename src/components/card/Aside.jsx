import React from 'react'

const Aside = ({title,children}) => {
    return (
        <div className=''>
            <h2 className='font-black text-xl'>{title}</h2>
            {children}
        </div>
    )
}

export default Aside
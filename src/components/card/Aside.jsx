import React from 'react'

const Aside = ({title,children}) => {
    return (
        <div className='bg-lbp dark:bg-dbp mb-8 mx-4 px-3 py-6 rounded-lg shadow-lg flex flex-col gap-5'>
            <h2 className='font-black text-xl text-lfp dark:text-dfp'>{title}</h2>
            {children}
        </div>
    )
}

export default Aside
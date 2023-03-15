import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'

const categores = [
    {
        id: 1,
        category: 'Database',
        subCategores: [
            'MS SQL Server', 'Mongo DB', 'My SQL Server', 'Apache'
        ]
    },
    {
        id: 2,
        category: 'Web Development ',
        subCategores: [
            'React.js', 'Node.js', '.Net Core', 'Jango'
        ]
    },
    {
        id: 3,
        category: 'Mobile Development ',
        subCategores: [
            'React Nativ', 'Zamarin', 'Katlin', 'Java'
        ]
    },
    {
        id: 4,
        category: 'Language',
        subCategores: [
            'C#', 'JavaScript', 'Phayton', 'Java'
        ]
    },
    {
        id: 5,
        category: 'SEO',
    },
]

const BottonNavBar = () => {

    const [hoverStates, setHoverStates] = useState({})

    const handleMouseOver = (id) => {
        setHoverStates({
            [id]: true
        });
    };
    const handleMouseLeave = (id) => {
        setHoverStates({
            [id]: false
        });
    };
    return (
        <div className=' hidden lg:inline-block w-full bg-dfs dark:bg-lfs px-12 py-2'>

            <ul className='botton-bar flex justify-start items-center gap-5 ml-12 text-lfp dark:text-dfp'>
                {
                    categores.map((cat) => (
                        <li onMouseEnter={()=>handleMouseOver(cat.id)} onMouseLeave={()=>handleMouseLeave(cat.id)} key={cat.id} id={cat.id}>
                            <Link to="#">{cat.category} {cat.subCategores && (<BsChevronDown />)}</Link>
                            {cat.subCategores && (
                                <ul className={`${!hoverStates[cat.id] && 'hidden'} sub-bar`}>
                                    {cat.subCategores.map((subCat, idx) => (
                                        <li key={idx}>
                                            <Link to='/#'>{subCat}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default BottonNavBar
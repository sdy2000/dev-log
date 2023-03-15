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
        category: 'React ',
    },
    {
        id: 4,
        category: 'SQL Server',
    },
    {
        id: 5,
        category: 'SEO',
    },
]

const BottonNavBar = () => {
    const [isOpenList, setIsOpenList] = useState(false)

    return (
        <div className='w-full bg-dfs dark:bg-lfs px-12 py-2'>

            <ul className='botton-bar flex justify-start items-center gap-5 ml-12 text-lfp dark:text-dfp'>
                {
                    categores.map((cat) => (
                        <li onMouseEnter={() => setIsOpenList(true)} onMouseLeave={() => setIsOpenList(false)} key={cat.id}>
                            <Link to="#">{cat.category} {cat.subCategores && (<BsChevronDown />) }</Link>

                            {cat.subCategores && (
                                <ul className={`${!isOpenList && 'hidden'} sub-bar`}>
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
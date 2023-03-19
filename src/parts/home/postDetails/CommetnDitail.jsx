import React from 'react'
import { CardTime } from '../../../components'

const CommetnDitail = ({ comments }) => {
    return (

        <div className='post-ditail-card'>
            <div className='container'>
                <h1 className='font-bold text-lg xl:font-extrabold md:text-xl text-lfp dark:text-dfp mb-2 md:mb-5'>Comments</h1>

                <div className="flex flex-col justify-between items-center gap-2 mt-8">
                    {comments.map(comment => (
                        <div className="flex justify-start items-start gap-2 md:gap-4 mb-6 pb-4 border-b-2 border-lft w-full">
                            <img
                                className='w-10 h-10 md:w-12 md:h-12 object-cover border-2 border-lft rounded-full'
                                src={`/assets/img/sdy2000.jpg`}
                                alt='Author Name' />
                            <span>
                                <div className='flex justify-start items-center gap-5 mb-4'>
                                    <i
                                        className='font-bold text-sm text-lfs dark:text-dfs transition-all duration-300'
                                        to='#'>
                                        {comment.userName}
                                    </i>
                                    <CardTime dateTime={comment.createDate} />
                                </div>
                                <p className='text-sm md:text-base text-lfs dark:text-dfs'>
                                    {comment.userComment}
                                </p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CommetnDitail
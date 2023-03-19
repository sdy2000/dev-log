import React from 'react'
import { Link } from 'react-router-dom'
import { PostComment } from '../../parts'

const PostDitails = () => {
    return (
        <main>
            <div className="main bg-lbs dark:bg-dbs py-20 md:mr-8 lg:mr-0" >
                <div className='contents'>
                    <h2 className='text-lg text-lfp dark:text-dfp font-bold mb-10 text-center leading-5
                            sm:text-start sm:border-l-4 border-lft sm:pl-6  sm:max-w-2xl m-auto'>
                        Post Ditails
                    </h2>
                    <div className='post-ditail-card'>
                        <img
                            className='w-full rounded-t-lg'
                            src={`/assets/img/blog-1.png`}
                            alt="Blog iamge"
                        />
                        <div className='container'>
                            <h1 className='font-bold text-lg xl:font-extrabold md:text-xl text-lfp dark:text-dfp mb-2 md:mb-5'>MongoDB</h1>
                            <div className='text-sm md:text-base text-lfs dark:text-dfs'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusamus id repellendus aliquam iste dicta,
                                    aspernatur magnam obcaecati accusantium cumque ut culpa corrupti possimus!
                                    Adipisci magnam corporis labore impedit eius earum.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusamus id repellendus aliquam iste dicta,
                                    aspernatur magnam obcaecati accusantium cumque ut culpa corrupti possimus!
                                    Adipisci magnam corporis labore impedit eius earum.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusamus id repellendus aliquam iste dicta,
                                    aspernatur magnam obcaecati accusantium cumque ut culpa corrupti possimus!
                                    Adipisci magnam corporis labore impedit eius earum.
                                </p>
                                <br />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusamus id repellendus aliquam iste dicta,
                                    aspernatur magnam obcaecati accusantium cumque ut culpa corrupti possimus!
                                    Adipisci magnam corporis labore impedit eius earum.
                                </p>
                                <br />
                                <br />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusamus id repellendus aliquam iste dicta,
                                    aspernatur magnam obcaecati accusantium cumque ut culpa corrupti possimus!
                                    Adipisci magnam corporis labore impedit eius earum.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusamus id repellendus aliquam iste dicta,
                                    aspernatur magnam obcaecati accusantium cumque ut culpa corrupti possimus!
                                    Adipisci magnam corporis labore impedit eius earum.
                                </p>
                                <br />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Accusamus id repellendus aliquam iste dicta,
                                    aspernatur magnam obcaecati accusantium cumque ut culpa corrupti possimus!
                                    Adipisci magnam corporis labore impedit eius earum.
                                </p>
                            </div>
                            <div className="flex justify-between items-center gap-2 mt-8">
                                <div className="flex justify-center items-center gap-2 md:gap-4">
                                    <img
                                        className='w-10 h-10 md:w-12 md:h-12 object-cover border-2 border-lft rounded-full '
                                        src={`/assets/img/sdy2000.jpg`}
                                        alt='Author Name' />
                                    <Link
                                        className='font-bold text-sm text-lfs dark:text-dfs hover:text-accent
                                         dark:hover:text-accent transition-all duration-300'
                                        to='#'>
                                        sdy2000
                                    </Link>
                                </div>
                                <div className='flex justify-between items-center'>
                                    {/* <CardTime dateTime={blog.createDate} /> */}
                                    <p className='text-lfs dark:text-dfs'>
                                        2023/3/19
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PostComment />
                </div>
            </div>
        </main>
    )
}

export default PostDitails
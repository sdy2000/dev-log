import React from 'react'
import { Link } from 'react-router-dom'
import { CardButton, CardTime } from '..'

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card-group mb-12">
            <div className='blog-card bg-lbp dark:bg-dbp mb-4 p-1 rounded-lg shadow-lg transition-all duration-300 md:hover:-translate-y-1'>
                <div className="blog-card-banner">
                    <img
                        className='blog-banner-img'
                        src={`/assets/img/${blog.blogImage}`}
                        alt={blog.blogName} />
                </div>
                <div className='py-2 px-1'>
                    <CardButton text={blog.topic} href={blog.slug} />
                    <h3 className='leading-6 my-4'>
                        <Link to="#" className='text-base font-extrabold hover:decoration-2 hover:underline transition-all duration-300'>
                            {blog.blogShortDescription}
                        </Link>
                    </h3>
                    <p className='hidden'>
                        {blog.blogDescription}
                    </p>
                    <div className="wrapper-flex">
                        <div className="hidden">
                            <img
                                className='max-w-full'
                                src={`/assets/img/${blog.author.authorImage}`}
                                alt={blog.author.authorName}
                                width='30' height='30' />
                        </div>
                        <div className='flex justify-between items-center flex-wrap'>
                            <Link className='font-bold text-sm text-lfs dark:text-dfs hover:text-accent dark:hover:text-accent transition-all duration-300' to='#'>
                                {blog.author.authorName}
                            </Link>
                            <CardTime dateTime={blog.createDate} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
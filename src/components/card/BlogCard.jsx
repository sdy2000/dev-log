import React from 'react'
import { Link } from 'react-router-dom'
import { CardButton, CardTime } from '..'

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card-group">
            <div className='blog-card'>
                <div className="blog-card-banner">
                    <img
                        className='blog-banner-img'
                        src={`/assets/img/${blog.blogImage}`}
                        alt={blog.blogName} />
                </div>
            </div>
            <div className='blog-content-wrapper'>
                <CardButton />
                <h3>
                    <Link to="#" className='text-base font-semibold'>
                        {blog.blogShortDescription}
                    </Link>
                </h3>
                <p className='blog-text'>
                    {blog.blogDescription}
                </p>
                <div className="wrapper-flex">
                    <div className="profile-wrapper">
                        <img
                            className=''
                            src={`/assets/img/${blog.author.authorImage}`}
                            alt={blog.author.authorName}
                            width='40px' height='40px' />
                    </div>
                    <div className=''>
                        <Link to='#'>
                            {blog.author.authorName}
                        </Link>
                        <CardTime dateTime={blog.createDate} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
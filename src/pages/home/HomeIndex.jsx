import React from 'react'
import { BlogCard, Button1 } from '../../components'

const blogs = [
  {
    id: 1, blogName: 'MongoDB', blogImage: 'blog-1.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker',createDate:'2023-03-11',topic:'Database',slug:'#',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName:'sajad',authorImage:'sdy2000.jpg'
    }
  },
]

const HomeIndex = () => {
  return (
    <>
      <main>
        <div className='bg-lbp dark:bg-dbp pt-8 pb-2 text-center'>
          <div className='container'>
            <div className='left flex flex-col items-center gap-3'>
              <h1 className='text-xl font-black text-lfp dark:text-dfp'>
                Hi, This is <b className='text-accent'>DEVLog</b>.
                <br />
                Web Developer
              </h1>
              <p className='text-base font-semibold text-lfp dark:text-dfp'>Specialized in Full Stack Development</p>
              <div className="btn-group flex justify-center gap-3">
                <Button1 value={'Contact Us'} href={'#'} />
                <Button1 value={'About Us'} href={'#'} color={'bg-lfs hover:bg-lft text-white dark:bg-dfs dark:hover:bg-dft dark:text-black'} />
              </div>
            </div>
            <div className="right hidden">
              <div className="pattern-bg"></div>
              <div className="img-box">
                <img src="/assets/img/about.png" alt="User Avatar Img" />

                <div className="shap shap-1"></div>
                <div className="shap shap-2"></div>
              </div>
            </div>

          </div>
        </div>

        <div className="main bg-lbs dark:bg-dbs py-20" >
          <div className='contents'>
            {/* <!--==================== BLOG ====================--> */}
            <div className="blog">
              <h2 className='text-lg font-bold mb-12 text-center leading-5'>Lastest Blog Post</h2>
              {blogs.map(blog => (
                <BlogCard blog={blog} key={blog.id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomeIndex
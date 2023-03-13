import React from 'react'
import { BlogCard, Button1, PageNumButton } from '../../components'

const blogs = [
  {
    id: 1, blogName: 'MongoDB', blogImage: 'blog-1.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2023-03-11', topic: 'Database', slug: '#',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    },
  },
  {
    id: 2, blogName: 'MongoDB', blogImage: 'blog-2.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2023-04-21', topic: 'Database', slug: '#',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    }
  },
  {
    id: 3, blogName: 'MongoDB', blogImage: 'blog-3.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2022-05-31', topic: 'Database', slug: '#',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    }
  },
  {
    id: 4, blogName: 'MongoDB', blogImage: 'blog-4.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2023-07-11', topic: 'Database', slug: '#',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    }
  },
  {
    id: 5, blogName: 'MongoDB', blogImage: 'blog-5.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2023-02-14', topic: 'Database', slug: '#',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    }
  },
  {
    id: 6, blogName: 'MongoDB', blogImage: 'blog-6.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2023-012-17', topic: 'Database', slug: '#',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    }
  },
  {
    id: 7, blogName: 'MongoDB', blogImage: 'blog-7.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2023-04-11', topic: 'Database', slug: '#',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    }
  },
]

const HomeIndex = () => {
  return (
    <>
      <main>
        <div className='bg-lbp dark:bg-dbp pt-8 pb-2 text-center'>
          <div className='container'>
            <div className='left flex flex-col items-center gap-5 pb-14'>
              <h1 className='text-3xl font-black text-lfp dark:text-dfp'>
                Hi, This is <b className='text-accent'>DEV</b>Log.
                <br />
                Web Development
              </h1>
              <p className='text-base font-semibold text-lfs dark:text-dfs'>Specialized in Full Stack Development</p>
              <div className="btn-group flex justify-center gap-3">
                <Button1 value={'Contact Us'} href={'#'} />
                <Button1
                  value={'About Us'} href={'#'}
                  color={'bg-lbs text-lfs dark:bg-dbp hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent dark:text-dfs  border-lft'} />
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
              <h2 className='text-lg text-lfp dark:text-dfp font-bold mb-10 text-center leading-5
               sm:text-start sm:border-l-4 border-lft sm:pl-6  sm:max-w-2xl m-auto'>
                Lastest Blog Post
              </h2>
              {blogs.map(blog => (
                <BlogCard blog={blog} key={blog.id} />
              ))}
            </div>
            <PageNumButton />
          </div>
        </div>
      </main>
    </>
  )
}

export default HomeIndex
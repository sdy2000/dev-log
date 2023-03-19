import React from 'react'
import { BlogCard, PageNumButton } from '../../components'

const blogs = [
  {
    id: 1, blogName: 'MongoDB', blogImage: 'blog-1.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2023-03-11', topic: 'Database', slug: 'MongoDB',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    },
  },
  {
    id: 2, blogName: 'Time-out', blogImage: 'blog-2.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2023-04-21', topic: 'Database', slug: 'Time-out',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    }
  },
  {
    id: 3, blogName: 'coding', blogImage: 'blog-3.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2022-05-31', topic: 'Database', slug: 'coding',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    }
  },
  {
    id: 4, blogName: 'Database', blogImage: 'blog-4.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2023-07-11', topic: 'Database', slug: 'Database',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    }
  },
  {
    id: 5, blogName: 'aplication', blogImage: 'blog-5.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2023-02-14', topic: 'Database', slug: 'aplication',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    }
  },
  {
    id: 6, blogName: 'disign', blogImage: 'blog-6.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2023-012-17', topic: 'Database', slug: 'disign',
    blogDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aspernatur laboriosam quos optio tempora distinctio quibusdam odit ut, magnam voluptatum esse magni ipsam dolorum iusto id temporibus dolores saepe repellat!',
    author: {
      authorName: 'sajad', authorImage: 'sdy2000.jpg'
    }
  },
  {
    id: 7, blogName: 'rest-api', blogImage: 'blog-7.png', blogShortDescription: 'Building microservices with Dropwizard, MongoDB & Docker', createDate: '2023-04-11', topic: 'Database', slug: 'rest-api',
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
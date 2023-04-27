import React from "react";
import { Link } from "react-router-dom";
import { CardButton, CardTime } from "..";

const BlogCard = ({ blog }) => {
  return (
    <div className="mb-2 mx-4">
      <div
        className="bg-lbp dark:bg-dbp mb-4 p-2 rounded-lg shadow-lg transition-all duration-300 md:hover:-translate-y-1
            xs:grid grid-cols-5 xs:p-1 sm:max-w-2xl m-auto"
      >
        <div className="col-span-2">
          <Link to={`/blog/${blog.slug}`}>
            <img
              className="blog-banner-img xs:rounded-md w-full h-full object-cover"
              src={`./assets/img/${blog.blogImage}`}
              alt={blog.blogName}
            />
          </Link>
        </div>
        <div className="py-2 px-1 col-span-3 xs:px-5 xs:py-0">
          <CardButton text={blog.topic} href={blog.slug} />
          <h3 className="leading-6 my-4">
            <Link
              to={`/blog/${blog.slug}`}
              className="text-sm font-extrabold text-lfp dark:text-dfp hover:decoration-2
                         hover:underline transition-all duration-300"
            >
              {blog.blogShortDescription}
            </Link>
          </h3>
          <p
            className="hidden text-xs text-lfs tracking-wide leading-relaxed max-h-20 overflow-clip dark:text-dfs
                     sm:inline-block md:text-sm"
          >
            {blog.blogDescription}
          </p>
          <div className="wrapper-flex sm:flex justify-start gap-2">
            <div className="hidden sm:inline-block">
              <img
                className="w-12 h-12 object-cover border-2 border-lft rounded-full "
                src={`./assets/img/${blog.author.authorImage}`}
                alt={blog.author.authorName}
              />
            </div>
            <div className="flex justify-between items-center flex-wrap sm:flex-col sm:justify-start sm:gap-1">
              <Link
                className="font-bold text-sm text-lfs dark:text-dfs hover:text-accent dark:hover:text-accent
                             transition-all duration-300 sm:mr-[65%]"
                to="#"
              >
                {blog.author.authorName}
              </Link>
              <CardTime dateTime={blog.createDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

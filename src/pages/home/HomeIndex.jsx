import React from "react";
import { BlogCard, PageNumButton } from "../../components";
import { dataForCard } from "../../service/data/dataForCard";

const HomeIndex = () => {
  const blogs = dataForCard;

  return (
    <>
      <main>
        <div className="main bg-lbs dark:bg-dbs py-20">
          <div className="contents">
            {/* <!--==================== BLOG ====================--> */}
            <div className="blog">
              <h2
                className="text-lg text-lfp dark:text-dfp font-bold mb-10 text-center leading-5
               sm:text-start sm:border-l-4 border-lft sm:pl-6  sm:max-w-2xl m-auto"
              >
                Lastest Blog Post
              </h2>
              {blogs.map((blog) => (
                <BlogCard blog={blog} key={blog.id} />
              ))}
            </div>
            <PageNumButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeIndex;

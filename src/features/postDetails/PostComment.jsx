import React from "react";
import { Button1 } from "../../components";

const PostComment = () => {
  return (
    <div className="post-ditail-card">
      <div className="container flex flex-col justify-start gap-2 lg:gap-4">
        <h2 className="font-bold text-lg xl:font-extrabold md:text-xl text-lfp dark:text-dfp mb-2 md:mb-5 mt-2 md:mt-4">
          Post Comment
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 lg:gap-5 xl:gap-8">
          <input
            className="post-ditail-comment"
            type="text"
            placeholder="User Name"
          />
          <input
            className="post-ditail-comment"
            type="email"
            placeholder="Email"
          />
        </div>
        <textarea
          className="post-ditail-comment max-h-52 min-h-[160px]"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <span className="md:w-32 md:mt-4">
          <Button1 value={"submit"} />
        </span>
      </div>
    </div>
  );
};

export default PostComment;

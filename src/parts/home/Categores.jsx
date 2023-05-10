import React from "react";
import { Aside } from "../../components";
import { Link } from "react-router-dom";

const Categores = () => {
  return (
    <Aside title={"Categories"}>
      <ul className="text-lfs dark:text-dfs flex flex-col gap-1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Tob Blog</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </Aside>
  );
};

export default Categores;

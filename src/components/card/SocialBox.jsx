import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const SocialBox = ({ styles }) => {
  return (
    <ul className={styles}>
      <li>
        <a
          href="https://t.me/sdy2000"
          className="socail-icon text-blue-700 hover:text-blue-900"
        >
          <FaFacebook />
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/ssdy2000?igshid=ZDdkNTZiNTM="
          className="socail-icon text-pink-700 hover:text-pink-900"
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/sdy20000?s=09"
          className="socail-icon text-blue-600 hover:text-blue-8900"
        >
          <FaTwitter />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/sdy2000/"
          className="socail-icon text-green-700 hover:text-green-900"
        >
          <FaWhatsapp />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/sdy2000/"
          className="socail-icon text-sky-700 hover:text-sky-900"
        >
          <FaLinkedin />
        </a>
      </li>
    </ul>
  );
};

export default SocialBox;

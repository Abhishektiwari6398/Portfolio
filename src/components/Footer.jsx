import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/131746064"}
          alt="Founder"
        />

        <h2>Abhishek Tiwari</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com/@easywaytoaprogramming3649" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="www.linkedin.com/in/abhishek-tiwari2003" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Abhishektiwari6398" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
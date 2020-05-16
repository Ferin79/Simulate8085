import React from "react";
import style from "../css/footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerWrapper}>
      <div className={style.person}>
        <p>Ferin Patel</p>

        <a
          href="https://www.github.com/ferin79"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github fa-3x teal-text"></i>
        </a>
        <a
          href="https://www.instagram.com/ferin_patel_79"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram fa-3x pink-text"></i>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100004905079172"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook-official fa-3x blue-text"></i>
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin-square fa-3x light-blue-text"></i>
        </a>
      </div>
      <hr className={style.hrLine} />
      <div className={style.person}>
        <p>Jash Jariwala</p>
        <a
          href="https://github.com/JASH-JARIWALA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github fa-3x teal-text"></i>
        </a>
        <a
          href="https://www.instagram.com/__firemarshall_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram fa-3x pink-text"></i>
        </a>

        <a
          href="https://www.facebook.com/jash.jariwala.9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook-official fa-3x blue-text"></i>
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin-square fa-3x light-blue-text"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;

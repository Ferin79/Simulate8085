import React from "react";
import { SocialIcon } from "react-social-icons";
import style from "../css/footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerWrapper}>
      <div className={style.person}>
        <p>Ferin Patel</p>
        <SocialIcon url="https://www.github.com/ferin79" />
        <SocialIcon url="https://www.instagram.com/ferin_patel_79" />
        <SocialIcon url="https://www.facebook.com/profile.php?id=100004905079172" />
      </div>
      <div className={style.person}>
        <p>Jash Jariwala</p>
        <SocialIcon url="https://www.github.com/ferin79" />
        <SocialIcon url="https://www.instagram.com/ferin_patel_79" />
      </div>
    </div>
  );
};

export default Footer;

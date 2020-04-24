import React from "react";
import style from "./css/SvgSection.module.css";
import ProcessorSvg from "../images/8085.svg";

const SvgSection = () => {
  return (
    <div className={style.svgWrapper}>
      <img src={ProcessorSvg} className="responsive-img" alt="" />
    </div>
  );
};
export default SvgSection;

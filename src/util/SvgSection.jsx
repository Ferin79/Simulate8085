import React from "react";
import style from "./css/SvgSection.module.css";
import ProcessorSvg from "../images/final8085.svg";

const SvgSection = () => {
  return (
    <div className={style.svgWrapper}>
      <img src={ProcessorSvg} alt="" />
    </div>
  );
};
export default SvgSection;

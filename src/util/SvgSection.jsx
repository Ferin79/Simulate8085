import React from "react";
import style from "./css/SvgSection.module.css";
import ReactTooltip from "react-tooltip";
import SVGImages from "../images/8085";
import VirtualRam from "../customs/VirtualRam";

const SvgSection = () => {
  return (
    <div className={style.svgWrapper}>
      <SVGImages className={style.SVGImages} />
      <VirtualRam />
      <ReactTooltip html />
    </div>
  );
};
export default SvgSection;

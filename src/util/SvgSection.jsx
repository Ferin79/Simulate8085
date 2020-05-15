import React, { useContext } from "react";
import style from "./css/SvgSection.module.css";
import ReactTooltip from "react-tooltip";
import SVGImages from "../images/8085";
import VirtualRam from "../customs/VirtualRam";
import { Context } from "../data/context";

const SvgSection = () => {
  const { DiagramRef } = useContext(Context);
  return (
    <div className={style.svgWrapper} ref={DiagramRef}>
      <SVGImages className={style.SVGImages} />
      <VirtualRam />
      <ReactTooltip html />
    </div>
  );
};
export default SvgSection;

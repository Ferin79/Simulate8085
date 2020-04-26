import React, { useContext } from "react";
import style from "./css/Interact.module.css";
import { Button, Icon } from "react-materialize";
import { Context } from "../data/context";
import { HandleExecute } from "../controller/HandleExecute";

const Interact = () => {
  const { SVGRef, rawInstruction, InstructionArray } = useContext(Context);

  const handleNextClock = () => {};

  return (
    <div className={style.InteractWrapper}>
      <div className={style.InteractTitle}>
        <p className={style.title}>Interact with processor</p>
        <p className={style.subtitle}>
          Examine the CPU in different cycles of instruction execution.
        </p>
        <p className={style.subtitle}>Hover over any element to see details.</p>
      </div>
      <div className={style.InteractActions} ref={SVGRef}>
        <div className={style.InteractButtons}>
          <Button
            style={{ margin: "20px" }}
            onClick={() => HandleExecute(InstructionArray)}
          >
            Execute Instruction
            <Icon right>play_arrow</Icon>
          </Button>

          <Button onClick={handleNextClock}>
            Execute Next Clock
            <Icon right>fast_forward</Icon>
          </Button>
        </div>
        <div className={style.InteractDetails}>
          <p style={{ textTransform: "uppercase" }}>
            Loaded : {rawInstruction}
          </p>
          <p>Clock: </p>
          <p>Executed: </p>
        </div>
      </div>
    </div>
  );
};

export default Interact;

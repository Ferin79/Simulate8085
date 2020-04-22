import React from "react";
import style from "./css/Instruction.module.css";
import { TextInput, Button } from "react-materialize";

const ManipulateInstruction = () => {
  return (
    <div className={style.instructionWrapper}>
      <div className={style.instructionTitle}>
        <p className={style.title}>Instruction Editing</p>
        <p className={style.subtitle}>
          Instructions can use both Registers and Memory
        </p>
      </div>
      <div className={style.instructionInput}>
        <TextInput placeholder="Enter Instruction" />
      </div>
      <div className={style.instructionDetails}>
        <p className={style.subtitle}>
          Available instructions (hover for details):
        </p>
        <ul>
          <li>Add</li>
          <li>Sub</li>
          <li>ADI</li>
          <li>SUI</li>
          <li>MOV</li>
        </ul>
        <p className={style.subtitle}>
          Make sure you spell check your instructions.
        </p>
      </div>
      <Button className="green lighten-1">Load</Button>
    </div>
  );
};

export default ManipulateInstruction;

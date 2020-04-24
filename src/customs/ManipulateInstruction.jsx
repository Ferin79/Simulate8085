import React, { useContext } from "react";
import style from "./css/Instruction.module.css";
import { TextInput, Button } from "react-materialize";
import ReactTooltip from "react-tooltip";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../data/context";

const ManipulateInstruction = () => {
  const { setRawInstruction, SVGRef } = useContext(Context);
  toast.configure();

  return (
    <div className={style.instructionWrapper}>
      <div className={style.instructionTitle}>
        <p className={style.title}>Instruction Editing</p>
        <p className={style.subtitle}>
          Instructions can use both Registers and Memory
        </p>
      </div>
      <div className={style.instructionInput}>
        <TextInput
          placeholder="Enter Instruction"
          type="text"
          required
          validate
          error="Invalid Instrction"
          onChange={(event) => setRawInstruction(event.target.value)}
        />
      </div>
      <div className={style.instructionDetails}>
        <p className={style.subtitle}>
          Available instructions (hover for details):
        </p>
        <ul>
          <li data-tip="<h5>Ex: ADD</h5><p>ADD Register/Memory</p><p>Add values of Register/Memory to Accumulator</p>">
            Arithmetic Instructions
          </li>
          <li data-tip="<h5>Ex: MOV</h5><p>MOV B, C</p><p>Copy the content of register C to register B</p>">
            Data Transfer Instructions
          </li>
          <li data-tip="<h5>Ex: CMP</h5><p>CMP B</p><p>B register value is compared with the contents of accumulator.</p>">
            Logical Instructions
          </li>
        </ul>
        <p className={style.subtitle}>
          Make sure you spell check your instructions.
        </p>
      </div>
      <Button
        type="submit"
        className="green lighten-1"
        onClick={() => {
          console.log("Here");
          toast("Instruction Loaded");
          window.scrollTo({
            behavior: "smooth",
            top: SVGRef.current.offsetTop,
          });
        }}
      >
        Load
      </Button>
      <ReactTooltip html />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default ManipulateInstruction;

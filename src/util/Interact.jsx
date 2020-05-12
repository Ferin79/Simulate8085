import React, { useContext, useState } from "react";
import style from "./css/Interact.module.css";
import { Button, Icon } from "react-materialize";
import { Context } from "../data/context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Interact = () => {
  toast.configure();

  const [currentStep, setCurrentStep] = useState(1);
  const [clockText, setClockText] = useState("Fetch");
  const {
    SVGRef,
    rawInstruction,
    isInstructionValid,
    InstructionArray,
    setIsInstructionValid,
    setAddressRange,
    setRawInstruction,
    setInstructionArray,
    block,
    setBlock,
  } = useContext(Context);

  const handleExe = () => {
    if (isInstructionValid) {
    } else {
      toast.error("No Instruction Loaded");
    }
  };

  const handleNextClock = () => {
    if (isInstructionValid) {
      try {
        const instructionName = InstructionArray[0];
        console.log(InstructionArray);
        switch (instructionName) {
          case "ADD":
            if (currentStep === 1) {
              var opData = block;
              opData[0].opacity = 0.3;
              opData[2].opacity = 0.3;
              setBlock([...opData]);
              setCurrentStep(2);
            }
            if (currentStep === 2) {
              setClockText("Execution Done");
              setCurrentStep(3);
              setCurrentStep(0);
              setIsInstructionValid(false);
              setAddressRange([]);
              setRawInstruction(null);
              setInstructionArray(null);
              toast("Execution Completed");
            }
            break;
          default:
            break;
        }
      } catch (error) {
        console.log(error);
        toast.error("Error. Please Try again");
      }
    } else {
      toast.error("No Instruction Loaded");
    }
  };

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
          <Button style={{ margin: "20px" }} onClick={handleExe}>
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
          <p>Clock: {clockText}</p>
          <p>Executed: {currentStep}</p>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Interact;

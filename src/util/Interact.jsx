import React, { useContext, useState } from "react";
import style from "./css/Interact.module.css";
import { Button, Icon, Range } from "react-materialize";
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
    virtualRam,
    setPc,
    animationSpeed,
    setAnimationSpeed,
    opcodeMap,
    blockMap,
  } = useContext(Context);

  const handleExe = () => {
    if (isInstructionValid) {
    } else {
      toast.error("No Instruction Loaded");
    }
  };

  const executionComplete = () => {
    setCurrentStep(0);
    setIsInstructionValid(false);
    setAddressRange([]);
    setRawInstruction(null);
    setInstructionArray(null);
    toast("Execution Completed");
  };
  const handleFetchCycle = () => {
    virtualRam.forEach((virItem) => {
      setPc(virItem.address);
      const data = block;
      data.forEach((item) => {
        if (item.id !== 3) {
          item.opacity = 0.3;
        } else {
          item.value = virItem.instruction;
        }
      });
      setBlock([...data]);
    });
  };
  const handleDecodeCycle = () => {
    var opData = block;

    opData.forEach((element) => {
      element.opacity = 1;
    });

    setBlock([...opData]);
    setTimeout(() => {
      opcodeMap.forEach((element) => {
        var opData = block;
        if (element.val === InstructionArray[1]) {
          console.log("this is element code " + element.code);
          opData[blockMap.AD0_AD7].value = element.code;
          opData[blockMap.Instruction_decoder].value =
            "Decoded instruction and stored it in data buffer";
        }

        opData.forEach((item, index) => {
          if (
            index === blockMap.AD0_AD7 ||
            index === blockMap.Instruction_decoder
          ) {
            item.opacity = 1;
          } else {
            item.opacity = 0.3;
          }
        });
      });

      setBlock([...opData]);
    }, 500);
  };

  const handleNextClock = () => {
    if (isInstructionValid) {
      try {
        const instructionName = InstructionArray[0];
        switch (instructionName) {
          case "ADD":
            if (currentStep === 1) {
              handleFetchCycle();
              setCurrentStep(2);
            }
            if (currentStep === 2) {
              handleDecodeCycle();
              setCurrentStep(3);
            }
            if (currentStep === 3) {
              setClockText("Execution Done");
              executionComplete();
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

          <div className={style.animateWrapper}>
            <p>Animation Speed:</p>
            <Range
              max="10"
              min="0.5"
              name="points"
              value={animationSpeed}
              connect={true}
              step="0.5"
              style={{ width: 200, padding: 10, margin: 10 }}
              onChange={(event) => setAnimationSpeed(event.target.value)}
            />
            <p>{animationSpeed} Seconds</p>
          </div>
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

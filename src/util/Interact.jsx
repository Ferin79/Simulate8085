import React, { useContext, useState } from "react";
import style from "./css/Interact.module.css";
import { Button, Icon, Range } from "react-materialize";
import { Context } from "../data/context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Interact = () => {
  toast.configure();

  const [currentStep, setCurrentStep] = useState(0);
  const [clockText, setClockText] = useState("");
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
    blockMap,
    DiagramRef,
    opcodeMap,
    RegisterData,
    setRegisterData,
    addressRange,
    flags,
    setFlags,
    setVirtualRam,
  } = useContext(Context);

  const handleExe = () => {
    if (isInstructionValid) {
      handleNextClock();
    } else {
      toast.error("No Instruction Loaded");
    }
  };
  const handleAddInstruction = (acc, value, op) => {
    switch (op) {
      case "+":
        acc = acc + value;
        break;
      case "-":
        acc = acc - value;
        break;
      default:
        break;
    }
    let hexAns = acc.toString(16);
    if (hexAns.length > 2) {
      hexAns = `${hexAns[hexAns.length - 2]}${hexAns[hexAns.length - 1]}`;
    }
    setFlagsValue(acc);
    let blockData = block;
    blockData.forEach((item) => {
      if (
        item.id === 1 ||
        item.id === 4 ||
        item.id === 7 ||
        item.id === 8 ||
        item.id === 9
      ) {
        item.value = hexAns;
        item.opacity = 1;
      }
    });
    let regData = RegisterData;
    regData.forEach((item) => {
      if (item.acronym === "A") {
        item.value = hexAns;
      }
    });
    setRegisterData([...regData]);
    setBlock([...blockData]);
  };
  const handleFetchCycle = () => {
    virtualRam.forEach((virItem) => {
      setPc(virItem.address);
      const data = block;
      data[3].value = virItem.instruction;
      data.forEach((item) => {
        if (item.id === 3 || item.id === 9) {
          item.opacity = 1;
        } else {
          item.opacity = 0.3;
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
      try {
        const opData = block;
        if (!isNaN(parseInt(InstructionArray[1]))) {
          const memory = InstructionArray[1];
          if (memory.length === 1 || memory.length === 2) {
            opData[blockMap.A8_A15].value = "00000000";
            opData[blockMap.AD0_AD7].value = parseInt(
              InstructionArray[1]
            ).toString(2);
          }
          if (memory.length === 3) {
            opData[blockMap.A8_A15].value = parseInt(memory[0]).toString(2);
            opData[blockMap.AD0_AD7].value = parseInt(memory.slice(1)).toString(
              2
            );
          }
          if (memory.length === 4) {
            const higherOrder = `${memory[0]}${memory[1]}`;
            const lowerorder = `${memory[2]}${memory[3]}`;
            opData[blockMap.A8_A15].value = parseInt(higherOrder).toString(2);
            opData[blockMap.AD0_AD7].value = parseInt(lowerorder).toString(2);
          }
        } else {
          opcodeMap.forEach((element) => {
            if (element.val === InstructionArray[1]) {
              opData[blockMap.AD0_AD7].value = element.code;
            }
          });
        }
        opData[blockMap.Instruction_decoder].value =
          "Decoded instruction and address are stored it in data buffer and address buffer";
        opData.forEach((item, index) => {
          if (
            index === blockMap.AD0_AD7 ||
            index === blockMap.A8_A15 ||
            index === blockMap.Instruction_decoder
          ) {
            item.opacity = 1;
          } else {
            item.opacity = 0.3;
          }
        });
        setBlock([...opData]);
      } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong, please try again");
      }
    }, 500);
  };
  const handleExecutionCycle = (name) => {
    switch (name) {
      case "ADD":
        let acc = parseInt(RegisterData[0].value, 16);
        let value = fetchSecondValue();
        handleAddInstruction(acc, value, "+");
        break;
      case "ADI":
        let acc2 = parseInt(RegisterData[0].value, 16);
        let value2 = parseInt(InstructionArray[1]);
        handleAddInstruction(acc2, value2, "+");
        break;
      case "SUB":
        let acc3 = parseInt(RegisterData[0].value, 16);
        let value3 = fetchSecondValue();
        handleAddInstruction(acc3, value3, "-");
        break;
      case "SUI":
        let acc4 = parseInt(RegisterData[0].value, 16);
        let value4 = parseInt(InstructionArray[1]);
        handleAddInstruction(acc4, value4, "-");
        break;
      default:
        break;
    }
  };
  const setFlagsValue = (acc) => {
    const flagData = flags;
    if (acc === 0) {
      flagData[1].value = 1;
    }
    if (acc < 0) {
      flagData[0].value = 1;
    }
    if (acc > 255) {
      flagData[4].value = 1;
    }
    const bin = acc.toString(2);
    let evenCount = 0;
    for (var i = 0; i < bin.length; i++) {
      if (bin[i] === "1") {
        evenCount++;
      }
    }
    if (evenCount % 2 === 0 && evenCount !== 0) {
      flagData[3].value = 1;
    }
    setFlags([...flagData]);
  };
  const fetchSecondValue = () => {
    let value;
    if (!isNaN(parseInt(InstructionArray[1]))) {
      const memory = InstructionArray[1];
      addressRange.forEach((item) => {
        if (item.address === memory) {
          value = parseInt(item.value, 16);
        }
      });
    } else {
      RegisterData.forEach((element) => {
        if (element.acronym === InstructionArray[1].toUpperCase()) {
          value = parseInt(element.value, 16);
        }
      });
    }
    return value;
  };
  const executionComplete = () => {
    setCurrentStep(0);
    setVirtualRam([]);
    setIsInstructionValid(false);
    setAddressRange([]);
    setRawInstruction("");
    setInstructionArray(null);
    toast("Execution Completed");
  };
  const handleNextClock = () => {
    if (isInstructionValid) {
      window.scrollTo({
        behavior: "smooth",
        top: DiagramRef.current.offsetTop,
      });
      try {
        const instructionName = InstructionArray[0];

        if (currentStep === 0) {
          setCurrentStep(1);
          setClockText("Fetch");
          handleFetchCycle();
        }
        if (currentStep === 1) {
          setCurrentStep(2);
          setClockText("Decode");
          handleDecodeCycle();
        }
        if (currentStep === 2) {
          setCurrentStep(3);
          setClockText("Execution");
          handleExecutionCycle(instructionName);
          executionComplete();
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
              max="5"
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

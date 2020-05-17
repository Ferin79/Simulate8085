import React, { useContext } from "react";
import style from "./css/Instruction.module.css";
import { TextInput, Button } from "react-materialize";
import ReactTooltip from "react-tooltip";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../data/context";

const ManipulateInstruction = () => {
  const {
    rawInstruction,
    setRawInstruction,
    SVGRef,
    addressRange,
    setAddressRange,
    setInstructionArray,
    setIsInstructionValid,
    setVirtualRam,
    virtualRam,
    RegisterData,
  } = useContext(Context);
  toast.configure();

  const validate16bit = (sl, index) => {
    let isCorrect = false;
    try {
      if (!isNaN(parseInt(sl[index]))) {
        const memory = sl[index];
        var data = addressRange;
        var isAvail = false;
        data.forEach((element) => {
          if (element.address === memory) {
            isAvail = true;
            isCorrect = true;
          }
        });
        if (!isAvail) {
          data.push({
            id: Date.now(),
            address: memory,
            value: 0,
          });
          setAddressRange([...data]);
          isCorrect = true;
        }
      }
    } catch (error) {
      console.log(error);
      isCorrect = false;
    }
    return isCorrect;
  };
  const handleCheckRegisterAndMemory = (sl, index) => {
    try {
      var isCorrect = false;
      if (sl[index] !== undefined || sl[index] != null) {
        if (!isNaN(parseInt(sl[index]))) {
          isCorrect = validate16bit(sl, index);
        } else {
          isCorrect = validateRegisterOnly(sl, 1);
        }
      } else {
        toast.error(
          `Register/Memory Address not pass with ${sl[0]} Instruction`
        );
      }
      return isCorrect;
    } catch (error) {
      console.log(error);
      alert("Something goes wrong. Please try again");
      return false;
    }
  };
  const validate8bitData = (sl, index) => {
    let isCorrect = false;
    if (sl[index]) {
      const value = parseInt(sl[index]);
      console.log(value);
      if (isNaN(value) || value > 255) {
        toast.error(`${sl[0]} Only Accept Value between 0 and 255`);
        return isCorrect;
      } else {
        return true;
      }
    } else {
      toast.error(`No Value pass with ${sl[0]}`);
      return false;
    }
  };
  const validateRegisterOnly = (sl, index) => {
    try {
      let isCorrect = false;
      RegisterData.forEach((item) => {
        console.log(sl[index].toUpperCase());
        if (sl[index].toUpperCase() === item.acronym) {
          isCorrect = true;
        }
      });
      return isCorrect;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const handleLoad = () => {
    try {
      const instructArr = rawInstruction.toUpperCase().split(" ");
      var sl = [];
      instructArr.forEach((item) => {
        var spl = item.split(",");
        sl.push(...spl);
      });
      sl = sl.filter((item) => item !== "");
      sl = sl.filter((item) => item !== " ");
      var isCorrect = false;

      switch (sl[0]) {
        case "ADD":
        case "SUB":
        case "CMP":
        case "ANA":
        case "ORA":
        case "XRA":
          isCorrect = handleCheckRegisterAndMemory(sl, 1);
          break;
        case "ADI":
        case "SUI":
        case "CPI":
        case "ANI":
        case "ORI":
        case "XRI":
          isCorrect = validate8bitData(sl, 1);
          break;
        case "MOV":
          isCorrect = validateRegisterOnly(sl, 1);
          if (isCorrect) {
            isCorrect = handleCheckRegisterAndMemory(sl, 2);
          }
          break;
        case "MVI":
          isCorrect = validateRegisterOnly(sl, 1);
          if (isCorrect) {
            isCorrect = validate8bitData(sl, 2);
          }
          break;
        case "LDA":
        case "STA":
        case "LHLD":
        case "SHLD":
          isCorrect = validate16bit(sl, 1);
          break;
        default:
          console.log("Invalid Register/Memory Address Passed");
          break;
      }

      if (isCorrect) {
        setInstructionArray(sl);
        setVirtualRam([
          ...virtualRam,
          {
            address: randomIntFromInterval(2400, 8000),
            instruction: rawInstruction,
          },
        ]);
        toast("Instruction Loaded");
        setIsInstructionValid(true);
        window.scrollTo({
          behavior: "smooth",
          top: SVGRef.current.offsetTop,
        });
      } else {
        toast.error("Invalid Instruction");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error. Please Try Again");
    }
  };

  return (
    <div className={style.instructionWrapper}>
      <div className={style.instructionTitle}>
        <p className={style.title}>Instruction Editing</p>
        <p className={style.subtitle}>
          Instructions can use both Registers and Memory
        </p>
        <p>
          Address and value should be enter in decimal. Later it will be
          converted into hex numbers.
        </p>
      </div>
      <div className={style.instructionInput}>
        <TextInput
          placeholder="Enter Instruction"
          type="text"
          required
          validate
          error="Invalid Instrction"
          value={rawInstruction}
          onChange={(event) =>
            setRawInstruction(event.target.value.toUpperCase())
          }
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

      <Button type="submit" className="green lighten-1" onClick={handleLoad}>
        Load
      </Button>
      <ReactTooltip html />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default ManipulateInstruction;
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

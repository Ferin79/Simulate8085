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
  } = useContext(Context);
  toast.configure();

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
      var isCorrect;

      switch (sl[0]) {
        case "ADD":
          try {
            if (sl[1] !== undefined || sl[1] != null) {
              if (!isNaN(parseInt(sl[1]))) {
                const memory = sl[1];
                console.log("memory " + memory);
                var data = addressRange;
                var isAvail = false;
                data.forEach((element) => {
                  console.log(element);
                  if (element.address === memory) {
                    isAvail = true;
                  }
                });
                if (!isAvail) {
                  data.push({
                    id: Date.now(),
                    address: memory,
                    value: 0,
                  });
                }
                setAddressRange([...data]);
                isCorrect = true;
              } else {
                if (sl[1].length === 1) {
                  const register = sl[1];
                  console.log("register " + register);
                  isCorrect = true;
                } else {
                  toast.error(`Register Name is not Valid`);
                  break;
                }
              }
            } else {
              toast.error(
                `Register/Memory Address not Passes with ${sl[0]} Instruction`
              );
              break;
            }
          } catch (error) {
            alert("Something Went Wrong");
            console.log(error);
          }
          break;
        default:
          console.log("Invalid Register/Memory Address Passed");
          break;
      }

      if (isCorrect) {
        setInstructionArray(sl);
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

      <Button type="submit" className="green lighten-1" onClick={handleLoad}>
        Load
      </Button>
      <ReactTooltip html />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default ManipulateInstruction;

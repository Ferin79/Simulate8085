import { useContext } from "react";
import { Context } from "../data/context";

export const HandleExecute = (InstructionArray) => {
  const { addressRange, setAddressRange } = useContext(Context);
  const instructionName = InstructionArray[0];
  switch (instructionName) {
    case "ADD":
      var memoryLoc;
      var registerName;
      if (!InstructionArray[1]) {
        alert(
          `No Register / Memory Location provided with ${instructionName} Instruction`
        );
        break;
      }
      var temp = parseInt(InstructionArray[1]);
      if (temp) {
        memoryLoc = temp;
      } else {
        registerName = InstructionArray[1];
      }
      break;
    default:
      alert("Invalid Instruction");
      break;
  }
};

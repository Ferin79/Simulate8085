import React, { useState, createContext, useRef } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [RegisterData, setRegisterData] = useState([
    {
      id: 0,
      name: "Accumulator",
      value: "0",
      isEdit: false,
      acronym: "A",
    },
    {
      id: 1,
      name: "W Register",
      value: 0,
      isEdit: false,
      acronym: "W",
    },
    {
      id: 2,
      name: "Z Register",
      value: 0,
      isEdit: false,
      acronym: "Z",
    },
    {
      id: 3,
      name: "B Register",
      value: 0,
      isEdit: false,
      acronym: "B",
    },
    {
      id: 4,
      name: "C Register",
      value: 0,
      isEdit: false,
      acronym: "C",
    },
    {
      id: 5,
      name: "D Register",
      value: 0,
      isEdit: false,
      acronym: "D",
    },
    {
      id: 6,
      name: "E Register",
      value: 0,
      isEdit: false,
      acronym: "E",
    },
    {
      id: 7,
      name: "H Register",
      value: 0,
      isEdit: false,
      acronym: "H",
    },
    {
      id: 8,
      name: "L Register",
      value: 0,
      isEdit: false,
      acronym: "L",
    },
  ]);

  const InstructionDetails = useState([
    {
      id: 0,
      name: "ADD",
      group: "Arithmetic",
    },
    {
      id: 1,
      name: "ADI",
      group: "Arithmetic",
    },
    {
      id: 2,
      name: "SUB",
      group: "Arithmetic",
    },
    {
      id: 3,
      name: "SUI",
      group: "Arithmetic",
    },
    {
      id: 4,
      name: "MOV",
      group: "Data Transfer",
    },
    {
      id: 5,
      name: "MVI",
      group: "Data Transfer",
    },
    {
      id: 6,
      name: "LDA",
      group: "Data Transfer",
    },
    {
      id: 7,
      name: "STA",
      group: "Data Transfer",
    },
    {
      id: 8,
      name: "LHLD",
      group: "Data Transfer",
    },
    {
      id: 9,
      name: "SHLD",
      group: "Data Transfer",
    },
    {
      id: 10,
      name: "CMP",
      group: "Logical",
    },
    {
      id: 11,
      name: "CPI",
      group: "Logical",
    },
    {
      id: 12,
      name: "ANA",
      group: "Logical",
    },
    {
      id: 13,
      name: "ANI",
      group: "Logical",
    },
    {
      id: 14,
      name: "XRA",
      group: "Logical",
    },
    {
      id: 15,
      name: "XRI",
      group: "Logical",
    },
    {
      id: 16,
      name: "ORA",
      group: "Logical",
    },
    {
      id: 17,
      name: "ORI",
      group: "Logical",
    },
    {
      id: 18,
      name: "ADC",
      group: "Arithmetic",
    },
    {
      id: 19,
      name: "SBB",
      group: "Arithmetic",
    },
    {
      id: 20,
      name: "INR",
      group: "Arithmetic",
    },
    {
      id: 21,
      name: "DCR",
      group: "Arithmetic",
    },
  ]);
  const [flags, setFlags] = useState([
    {
      id: 0,
      name: "Sign Flag",
      symbol: "S",
      value: 0,
      desc: "If MSB bit 0 then the number is positive, else it is negative.",
    },
    {
      id: 1,
      name: "Zero Flag",
      symbol: "Z",
      value: 0,
      desc:
        "If an operation performed in ALU results 0 <br/>value of entire 8-bits then zero flag is set, else it resets.",
    },
    {
      id: 2,
      name: "Auxilary Carry",
      symbol: "AC",
      value: 0,
      desc:
        "f an operation performed in ALU generates the carry from lower nibble (D0 to D3) <br> to upper nibble (D4 to D7) AC flag is set, else it resets.",
    },
    {
      id: 3,
      name: "Parity Flag",
      symbol: "P",
      value: 0,
      desc:
        "If the result contains even no. of ones this flag is set and for odd no. of ones this flag is reset",
    },
    {
      id: 4,
      name: "Carry Flag",
      symbol: "C",
      value: "0",
      desc:
        "If an operation performed in ALU generates the carry from D7 to next stage then CY flag is set, else it is reset.",
    },
  ]);
  const [block, setBlock] = useState([
    {
      id: 0,
      name: "Databus",
      opacity: 1,
      value: 0,
    },
    {
      id: 1,
      name: "Accumulator",
      opacity: 1,
      value: 0,
    },
    {
      id: 2,
      name: "Temp",
      opacity: 1,
      value: 0,
    },
    {
      id: 3,
      name: "Instruction",
      opacity: 1,
      value: 0,
    },
    {
      id: 4,
      name: "AccLatch",
      opacity: 1,
      value: 0,
    },
    {
      id: 5,
      name: "FlipFlop",
      opacity: 1,
      value: 0,
    },
    {
      id: 6,
      name: "decoder",
      opacity: 1,
      value: "",
    },
    {
      id: 7,
      name: "ALU",
      opacity: 1,
      value: 0,
    },
    {
      id: 8,
      name: "decimal",
      opacity: 1,
      value: 0,
    },
    {
      id: 9,
      name: "control",
      opacity: 1,
      value: 0,
    },
    {
      id: 10,
      name: "buffer",
      opacity: 1,
      value: 0,
    },
  ]);
  const opcodeMap = [
    { val: "A", code: 87 },
    { val: "B", code: 80 },
    { val: "C", code: 81 },
    { val: "D", code: 82 },
    { val: "E", code: 83 },
    { val: "H", code: 84 },
    { val: "L", code: 85 },
    { val: "M", code: 86 },
  ];

  const blockMap = {
    AD0_AD7: 0,
    Accumulator: 1,
    Temp: 2,
    Instruction_register: 3,
    AccLatch: 4,
    FlipFlop: 5,
    Instruction_decoder: 6,
    ALU: 7,
    decimal: 8,
    control: 9,
    A8_A15: 10,
    Reg_A: 0,
    Reg_W: 1,
    Reg_Z: 2,
    Reg_B: 3,
    Reg_C: 4,
    Reg_D: 5,
    Reg_E: 6,
    Reg_H: 7,
    Reg_L: 8,
    ProgramCounter: 11,
    sign_flag: 0,
    zero_flag: 1,
    auxiliary_flag: 2,
    parity_flag: 3,
    carry_flag: 4,
  };

  const [isInstructionValid, setIsInstructionValid] = useState(false);
  const [InstructionArray, setInstructionArray] = useState();
  const [rawInstruction, setRawInstruction] = useState(null);
  const [addressRange, setAddressRange] = useState([]);
  const [virtualRam, setVirtualRam] = useState([]);
  const [pc, setPc] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(0.5);
  const SVGRef = useRef(null);
  const DiagramRef = useRef(null);
  const [instructionModal, setInstructionModal] = useState(false);

  return (
    <Context.Provider
      value={{
        RegisterData,
        setRegisterData,
        rawInstruction,
        setRawInstruction,
        addressRange,
        setAddressRange,
        SVGRef,
        InstructionDetails,
        InstructionArray,
        setInstructionArray,
        flags,
        setFlags,
        isInstructionValid,
        setIsInstructionValid,
        block,
        setBlock,
        virtualRam,
        setVirtualRam,
        pc,
        setPc,
        animationSpeed,
        setAnimationSpeed,
        opcodeMap,
        blockMap,
        DiagramRef,
        instructionModal,
        setInstructionModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

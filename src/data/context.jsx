import React, { useState, createContext, useRef } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [RegisterData, setRegisterData] = useState([
    {
      id: 0,
      name: "W Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 1,
      name: "Z Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 2,
      name: "B Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 3,
      name: "C Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 4,
      name: "D Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 5,
      name: "E Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 6,
      name: "H Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 7,
      name: "L Register",
      value: 0,
      isEdit: false,
    },
  ]);
  const [rawInstruction, setRawInstruction] = useState(null);
  const [addressRange, setAddressRange] = useState([]);
  const SVGRef = useRef(null);
  const InstructionDetails = useState([
    {
      id: 0,
      name: "ADD",
      clock: 4,
      cycle: 1,
      group: "Arithmetic",
    },
    {
      id: 1,
      name: "ACC",
      clock: 7,
      group: "Arithmetic",
    },
    {
      id: 2,
      name: "MOV",
      clock: 4,
      cycle: 1,
      group: "Data Transfer",
    },
  ]);

  const [InstructionArray, setInstructionArray] = useState();
  const [Accumulator, setAccumulator] = useState(0);
  const [tempReg, setTempReg] = useState(0);
  const [flags, setFlags] = useState([
    {
      id: 0,
      name: "Sign Flag",
      symbol: "S",
      value: 0,
    },
    {
      id: 1,
      name: "Zero Flag",
      symbol: "Z",
      value: 0,
    },
    {
      id: 2,
      name: "Auxilary Carry",
      symbol: "AC",
      value: 0,
    },
    {
      id: 3,
      name: "Parity Flag",
      symbol: "P",
      value: 0,
    },
    {
      id: 4,
      name: "Carry Flag",
      symbol: "C",
      value: "0",
    },
  ]);

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
        Accumulator,
        setAccumulator,
        flags,
        setFlags,
        tempReg,
        setTempReg,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

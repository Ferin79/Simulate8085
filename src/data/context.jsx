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
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

import React, { useContext, useState } from "react";
import style from "./css/VirtualRam.module.css";
import { Context } from "../data/context";
import { Table, TextInput, Button } from "react-materialize";

const VirtualRam = () => {
  const { virtualRam } = useContext(Context);
  const [deciToHex, setDeciToHex] = useState(true);
  const [deci, setDeci] = useState("");
  const [hex, setHex] = useState("");
  const [answer, setAnswer] = useState("");
  const [bin, setBin] = useState("");

  const handleConversion = () => {
    if (deciToHex) {
      setAnswer(parseInt(deci).toString(16));
      setBin(parseInt(deci).toString(2));
      setDeci("");
    } else {
      setAnswer(parseInt(hex, 16));
      setBin(parseInt(hex, 16).toString(2));
      setHex("");
    }
  };

  return (
    <div className={style.virtualWrapper}>
      <div className={style.virtualTextWrapper}>
        <p className={style.title}>Memory Locations</p>
        <p className={style.subtitle}>
          This indicates that where instruction is stored in computer memory
        </p>
      </div>

      <Table centered hoverable responsive striped>
        <thead className="orange lighten-2">
          <tr>
            <th data-field="Name">Address</th>
            <th data-field="value">Instruction</th>
          </tr>
        </thead>
        <tbody>
          {virtualRam.length ? (
            virtualRam.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.address}</td>
                  <td>{item.instruction}</td>
                </tr>
              );
            })
          ) : (
            <h6 className="center">No Instruction Loaded</h6>
          )}
        </tbody>
      </Table>

      <div className={style.conversionWrapper}>
        <h5>Conversion</h5>
        {deciToHex ? (
          <input
            placeholder="Enter Decimal Number"
            name="Deci"
            type="number"
            min="0"
            required
            value={deci}
            validate
            error="Please enter valid decimal number"
            onChange={(event) => {
              setDeci(event.target.value);
            }}
          />
        ) : (
          <input
            placeholder="Enter Hex Number"
            type="text"
            name="hex"
            min="0"
            required
            value={hex}
            validate
            error="Please enter valid hex number"
            onChange={(event) => {
              setHex(event.target.value);
            }}
          />
        )}
        <div>
          <Button
            type="submit"
            small
            waves
            style={{ margin: "20px" }}
            onClick={() => handleConversion()}
            className="blue"
          >
            Convert to {deciToHex ? "Hex" : "Decimal"}
          </Button>
          <Button
            type="submit"
            small
            waves
            style={{ margin: "20px" }}
            onClick={() => setDeciToHex(!deciToHex)}
            className="cyan"
          >
            Swap
          </Button>
        </div>
        <TextInput label="Answer in Hex" value={answer} disabled />
        <TextInput label="Answer in Binary" value={bin} disabled />
      </div>
    </div>
  );
};

export default VirtualRam;

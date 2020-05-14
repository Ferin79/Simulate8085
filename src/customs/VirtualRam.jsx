import React, { useContext } from "react";
import style from "./css/VirtualRam.module.css";
import { Context } from "../data/context";
import { Table } from "react-materialize";

const VirtualRam = () => {
  const { virtualRam } = useContext(Context);
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
          {virtualRam
            ? virtualRam.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.address}</td>
                    <td>{item.instruction}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </div>
  );
};

export default VirtualRam;

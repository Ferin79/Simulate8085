import React from "react";
import ManipulateRegister from "../customs/ManipulateRegister";
import ManipulateInstruction from "../customs/ManipulateInstruction";
import ManipulateAddress from "../customs/ManipulateAddress";
import styles from "./css/Manipulate.module.css";

const Manipulate = () => {
  return (
    <div className={styles.manipulateWrapper}>
      <ManipulateRegister />
      <ManipulateInstruction />
      <ManipulateAddress />
    </div>
  );
};

export default Manipulate;

import React, { useState } from "react";
import style from "./css/Tutorials.module.css";
import { Button } from "react-materialize";

const Tutorial = ({ setShowTutorials }) => {
  const [screen, setScreen] = useState(1);
  return (
    <div className={style.tutWrapper}>
      {screen === 1 ? (
        <section className={style.section1}>
          <h3 className={style.tutText}>
            Welcome to Microprocessor 8085 Visualizer!
          </h3>
          <h5 className={style.tutText}>
            This short tutorial will walk you through all of the features of
            this application.
          </h5>
          <h6 className={style.tutText}>
            If you want to dive right in, feel free to press the "Skip Tutorial"
            button below. Otherwise, press "Next"!
          </h6>
          <div className={style.imgWrapper}>
            <img
              src={require("../images/cpu.png")}
              alt="cpu"
              height={350}
              width={350}
            />
          </div>
        </section>
      ) : null}

      {screen === 2 ? (
        <section className={style.section1}>
          <h3 className={style.tutText}>What is Microprocessor 8085?</h3>
          <h5 className={style.tutText}>
            8085 is pronounced as "eighty-eighty-five" microprocessor. It is an
            8-bit microprocessor designed by Intel in 1977 using NMOS
            technology.
          </h5>
          <h6 className={style.tutText}>
            It is a software-binary compatible with the more-famous Intel 8080
            with only two minor instructions added to support its added
            interrupt and serial input/output features.
          </h6>
          <div className={style.imgWrapper}>
            <img
              src={require("../images/cpu.png")}
              alt="cpu"
              height={350}
              width={350}
            />
          </div>
        </section>
      ) : null}

      <section className={style.btnWrapper}>
        <div>
          <Button
            className={style.closeBtn}
            node="button"
            style={{
              marginRight: "5px",
            }}
            waves="light"
            onClick={() => {
              document.querySelector("body").style.pointerEvents = "all";
              document.querySelector("body").style.overflow = "auto";
              setShowTutorials(false);
            }}
          >
            Skip Tutorials
          </Button>
        </div>
        <div>
          {screen !== 1 ? (
            <Button
              className={style.prevBtn}
              node="button"
              style={{
                marginRight: "5px",
              }}
              waves="light"
              onClick={() => {
                if (screen !== 1) {
                  setScreen((old) => old - 1);
                }
              }}
            >
              Previous
            </Button>
          ) : null}
          {screen !== 5 ? (
            <Button
              className={style.btnNext}
              node="button"
              style={{
                marginRight: "5px",
              }}
              waves="light"
              onClick={() => {
                if (screen === 3) {
                  document.querySelector("body").style.pointerEvents = "all";
                  document.querySelector("body").style.overflow = "auto";
                  setShowTutorials(false);
                } else {
                  setScreen((old) => old + 1);
                }
              }}
            >
              Next
            </Button>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Tutorial;

import React, { useState, useContext } from "react";
import style from "./css/Tutorials.module.css";
import { Button } from "react-materialize";
import { Context } from "../data/context";

const Tutorial = ({ setShowTutorials }) => {
  const [screen, setScreen] = useState(1);
  const { instructionModal, setInstructionModal } = useContext(Context);
  return (
    <div className={style.tutWrapper}>
      {instructionModal ? (
        <div className={style.modalStyle}>
          <h3>Available Instructions</h3>
          <div className={style.ListWrapper}>
            <ul>
              <li className="center" style={{ fontWeight: "bold" }}>
                Arithmetic Instructions
              </li>
              <li className="center">ADD</li>
              <li className="center">ADC</li>
              <li className="center">ADI</li>
              <li className="center">SUB</li>
              <li className="center">SBB</li>
              <li className="center">SUI</li>
              <li className="center">SUI</li>
              <li className="center">INR</li>
              <li className="center">DCR</li>
            </ul>
            <ul>
              <li className="center" style={{ fontWeight: "bold" }}>
                Data Transfer Instructions
              </li>
              <li className="center">MOV</li>
              <li className="center">MVI</li>
              <li className="center">LDA</li>
              <li className="center">STA</li>
              <li className="center">LHLD</li>
              <li className="center">SHLD</li>
            </ul>
            <ul>
              <li className="center" style={{ fontWeight: "bold" }}>
                Logical Instructions
              </li>
              <li className="center">CMP</li>
              <li className="center">CPI</li>
              <li className="center">ANA</li>
              <li className="center">ANI</li>
              <li className="center">ORA</li>
              <li className="center">ORI</li>
              <li className="center">XRA</li>
              <li className="center">XRI</li>
            </ul>
          </div>
          <Button
            className="blue"
            onClick={() => {
              document.querySelector("body").style.pointerEvents = "all";
              document.querySelector("body").style.overflow = "auto";
              setShowTutorials(false);
              setInstructionModal(false);
            }}
          >
            Close
          </Button>
        </div>
      ) : null}
      {!instructionModal && screen === 1 ? (
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

      {!instructionModal && screen === 2 ? (
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
              src={require("../images/cpu2.gif")}
              alt="cpu"
              height={350}
              width={350}
            />
          </div>
        </section>
      ) : null}

      {!instructionModal && screen === 3 ? (
        <section className={style.section1}>
          <h3 className={style.tutText}>Modify Register values</h3>
          <h6 className={style.tutText}>
            Note: You will enter values in decimal from 0 to 255. Later this
            values will be converted into hexadecimal values.
          </h6>
          <div className={style.imgWrapper}>
            <img
              src={require("../images/register.gif")}
              alt="cpu"
              height={500}
              width={500}
            />
          </div>
        </section>
      ) : null}
      {!instructionModal && screen === 4 ? (
        <section className={style.section1}>
          <h3 className={style.tutText}>Modify Address/Memory values</h3>
          <h6 className={style.tutText}>
            Note: You will enter values in decimal from 0 to 255. Later this
            values will be converted into hexadecimal values.
          </h6>
          <div className={style.imgWrapper}>
            <img
              src={require("../images/memory.gif")}
              alt="cpu"
              height={500}
              width={500}
            />
          </div>
        </section>
      ) : null}

      {!instructionModal && screen === 5 ? (
        <section className={style.section1}>
          <h3 className={style.tutText}>Load Instructions</h3>
          <h6 className={style.tutText}>
            Currenlty Supported Instruction are.....(More Instructions are
            coming soon)
          </h6>
          <div className={style.ListWrapper}>
            <ul>
              <li className="center" style={{ fontWeight: "bold" }}>
                Arithmetic Instructions
              </li>
              <li className="center">ADD</li>
              <li className="center">ADC</li>
              <li className="center">ADI</li>
              <li className="center">SUB</li>
              <li className="center">SUI</li>
              <li className="center">SBB</li>
              <li className="center">INR</li>
              <li className="center">DCR</li>
            </ul>
            <ul>
              <li className="center" style={{ fontWeight: "bold" }}>
                Data Transfer Instructions
              </li>
              <li className="center">MOV</li>
              <li className="center">MVI</li>
              <li className="center">LDA</li>
              <li className="center">STA</li>
              <li className="center">LHLD</li>
              <li className="center">SHLD</li>
            </ul>
            <ul>
              <li className="center" style={{ fontWeight: "bold" }}>
                Logical Instructions
              </li>
              <li className="center">CMP</li>
              <li className="center">CPI</li>
              <li className="center">ANA</li>
              <li className="center">ANI</li>
              <li className="center">ORA</li>
              <li className="center">ORI</li>
              <li className="center">XRA</li>
              <li className="center">XRI</li>
            </ul>
          </div>
          <h6 className={style.tutText}>
            Note: You will enter values in decimal from 0 to 255. Later this
            values will be converted into hexadecimal values.
          </h6>
          <div className={style.imgWrapper}>
            <img
              src={require("../images/instruction.gif")}
              alt="cpu"
              height={110}
              width={500}
            />
          </div>
        </section>
      ) : null}
      {!instructionModal && screen === 6 ? (
        <section className={style.section1}>
          <h3 className={style.tutText}>Conversion</h3>
          <h6 className={style.tutText}>
            You can convert decimal to Hex and Vice Versa
          </h6>

          <h6 className={style.tutText}>
            Note: You will enter values in decimal from 0 to 255. Later this
            values will be converted into hexadecimal values.
          </h6>
          <div className={style.imgWrapper}>
            <img
              src={require("../images/convert.gif")}
              alt="cpu"
              height={400}
              width={500}
            />
          </div>
        </section>
      ) : null}

      {!instructionModal && screen === 7 ? (
        <section className={style.section1}>
          <h3 className={style.tutText}>Visualize 8085</h3>
          <h6 className={style.tutText}>
            You can visulize how the instructions executes in 8085 and what
            different blocks of 8085 changes.
          </h6>
          <h6 className={style.tutText}>
            Note. Hover over 8085 components, show the value of that particular
            component at that moment.
          </h6>

          <div className={style.imgWrapper}>
            <img
              src={require("../images/visualize.gif")}
              alt="cpu"
              height={400}
              width={500}
            />
          </div>
        </section>
      ) : null}

      {!instructionModal && screen === 8 ? (
        <section className={style.section1}>
          <h3 className={style.tutText}>Enjoy!</h3>
          <h6 className={style.tutText}>
            I hope you have just as much fun playing around with this
            visualization tool as I had building it!
          </h6>
          <h6 className={style.tutText}>
            If you want to see the source code for this application, check out
            my{" "}
            <a
              style={{ pointerEvents: "all" }}
              href="https://www.github.com/ferin79"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            .
          </h6>

          <div className={style.imgWrapper}>
            <img
              src={require("../images/done.gif")}
              alt="cpu"
              height={500}
              width={500}
            />
          </div>
        </section>
      ) : null}

      {!instructionModal ? (
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
            {screen === 8 ? (
              <Button
                className={style.btnNext}
                node="button"
                style={{
                  marginRight: "5px",
                }}
                onClick={() => {
                  document.querySelector("body").style.pointerEvents = "all";
                  document.querySelector("body").style.overflow = "auto";
                  setShowTutorials(false);
                }}
                waves="light"
              >
                I'M Ready
              </Button>
            ) : (
              <Button
                className={style.btnNext}
                node="button"
                style={{
                  marginRight: "5px",
                }}
                waves="light"
                onClick={() => {
                  if (screen === 8) {
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
            )}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Tutorial;

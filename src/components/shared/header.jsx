import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../css/header.module.css";
import { Button } from "react-materialize";
import { Context } from "../../data/context";

const Header = ({ showTutorials }) => {
  toast.configure();
  const showToast = () => {
    toast("Link Copied to Clipboard");
  };
  const { setInstructionModal } = useContext(Context);
  return (
    <React.Fragment>
      <div className={style.headerWrapper}>
        <div className={style.headerTitleWrapper}>
          <h4>Simulate 8085</h4>
        </div>
        <div className={style.actionWrapper}>
          <Button
            className="z-depth-1 transparent"
            onClick={() => {
              showTutorials(true);
              setInstructionModal(true);
            }}
          >
            Show Available Instructions
          </Button>
          <CopyToClipboard
            text="https://ferin79.github.io/Simulate8085/"
            onCopy={showToast}
          >
            <i className="material-icons">share</i>
          </CopyToClipboard>
        </div>
      </div>
      <ToastContainer autoClose={1000} closeOnClick />
    </React.Fragment>
  );
};
export default Header;

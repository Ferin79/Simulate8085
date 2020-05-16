import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../css/header.module.css";

const Header = () => {
  toast.configure();
  const showToast = () => {
    toast("Link Copied to Clipboard");
  };
  return (
    <React.Fragment>
      <div className={style.headerWrapper}>
        <div className={style.headerTitleWrapper}>
          <h4>Simulate 8085</h4>
        </div>
        <div className={style.actionWrapper}>
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

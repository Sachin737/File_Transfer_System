import React from "react";
import "../styles/Popup.scss";
import {removePopup} from "../pages/FileReceiver";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="upper">
        <div className="data">
          <h2>Connected Successfully</h2>
          <p>With Room ID</p>
        </div>
        <div className="close">
          <button onClick={removePopup}>x</button>
        </div>
      </div>
      <div className="lottie">
        <video loop autoPlay muted>
          <source src={require("../images/success.mp4")} type="video/mp4" />
        </video>
      </div>
      <div className="lower">
        <h2>{props.senderId}</h2>
      </div>
    </div>
  );
};

export default Popup;

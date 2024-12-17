import React from "react";
import "./WindowControls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WindowControls = () => {
  const handleClose = () => {
    window.api.closeWindow();
  };

  const handleMinimize = () => {
    window.api.minimizeWindow();
  };

  const handleMaximize = () => {
    window.api.maximizeWindow();
  };

  return (
    <div className="window-controls h-full">
      <div className="logo w-3">
        <FontAwesomeIcon
          icon={faWhatsapp}
          size="2x"
          style={{ color: "green" }}
        />
        <span className="text-xs">WhatsApp</span>
      </div>

      <div className="buttons">
        <button
          onClick={handleMinimize}
          className="minimize-btn btn text-red-600 "
        >
          &#x2013; {/* Minus sign */}
        </button>
        <button onClick={handleMaximize} className="maximize-btn btn">
          &#9744; {/* Maximize icon */}
        </button>
        <button onClick={handleClose} className="close-btn btn">
          &#10005; {/* Close icon */}
        </button>
      </div>
    </div>
  );
};

export default WindowControls;

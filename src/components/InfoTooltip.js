import React from "react";

function InfoTooltip({isOpen, onClose, message}) {
  return (
    <div className={`popup popup__tooltip ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__container">
        <img
          src={message.imgPath}
          alt="Подтверждение"
          className="popup__image"
        />
        <p className="popup__tooltip-description">{message.text}</p>
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
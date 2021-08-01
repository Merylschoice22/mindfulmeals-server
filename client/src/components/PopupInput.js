import React from "react";

function PopupInput(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : (
    ""
  );
}

export default PopupInput;
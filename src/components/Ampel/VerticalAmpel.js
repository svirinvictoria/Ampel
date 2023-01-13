import React from "react";

import "./VerticalAmpel.css";
const VerticalAmpel = (props) => {   

  return (
    <div className="ampel-body">
      <div className={props.redClass + " ampel-button"}></div>
      <div className={props.yellowClass + " ampel-button"}></div>
      <div className={props.greenClass + " ampel-button"}></div>
    </div>
  );
};

export default VerticalAmpel;

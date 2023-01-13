import React from "react";

import './HorizontalAmpel.css';

const HorizontalAmpel = (props) => {

    return (
      <div className="ample-body">
        <div className={props.redClass + " h_ample-light"}> </div>
        <div className={props.yellowClass + " h_ample-light"}> </div>
        <div className={props.greenClass + " h_ample-light"}> </div>
      </div>
    );
};

export default HorizontalAmpel;
import React from "react";

import Condition from "../components/Condition";
import "./AmpelPanel.css";


const AmpelPanel = () => {
  return (
    <div className="panel-body">

        <Condition type="Vertical"  />
     
    </div>
  );
};

export default AmpelPanel;

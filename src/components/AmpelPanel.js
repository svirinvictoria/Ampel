import React from "react";
import "./AmpelPanel.css";
// import VerticalAmpel from "./Ampel/VerticalAmpel";
import Condition from "../components/Condition";



const AmpelPanel = () => {
  return (
    <div className="panel-body">
      {/* <p>Ampel Panel</p> */}
     
        <Condition type="Vertical" />
     
    </div>
  );
};

export default AmpelPanel;

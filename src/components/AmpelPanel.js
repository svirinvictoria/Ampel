import React from "react";
import "./AmpelPanel.css";
import VerticalAmpel from "./Ampel/VerticalAmpel";


const AmpelPanel = () => {
  return (
    <div className="panel-body">
      {/* <p>Ampel Panel</p> */}
     
        <VerticalAmpel />
     
    </div>
  );
};

export default AmpelPanel;

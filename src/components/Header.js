import React from "react";
import "./Header.css";
// import HorizontalAmpel from "./Ampel/HorizontalAmpel";
import Condition from "./Condition";

function Header() {
  return (
    <div className="main">
      <p className="logo-text"> DIE AMPEL</p>
      <div className="hor-ampel-place">
        <Condition type="Horizontal" />
      </div>
    </div>
  );
}

export default Header;

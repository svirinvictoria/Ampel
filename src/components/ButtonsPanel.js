import React from "react";
import Button from "./Button";
import './ButtonsPanel.css';

const ButtonsPanel = () => {
    return (
      <div className="panel-bcg">
        <Button chooseColor="Rot" />
        <Button chooseColor="Gelb" />
        <Button chooseColor="Gruen" />
      </div>
    );
}

export default ButtonsPanel;
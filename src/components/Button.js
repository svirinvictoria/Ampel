import React, { useContext } from "react";
import "./ButtonsPanel.css";
import ContextLight from "../store/context-light";

const Button = (props) => {
  const ctx = useContext(ContextLight);
 

  let chooseColor = props.chooseColor;

  const colorClickHandler = () => {
    ctx.changeLight(chooseColor);
     
  };


  const isButton = true;

  const getContent = () => {
    if (isButton) {
      return (
        <button className="main-button" onClick={colorClickHandler}>
          {chooseColor}
        </button>
      );
    } else {
      return <div>Test</div>;
    }
  };

  return getContent();
  // <button className="main-button" onClick={colorClickHandler}>
  //   {chooseColor}
  // </button>
  // <button onClick={doFunc}>test</button>
  // <button onClick={() => doFunc("val")}>test</button>
};
export default Button;

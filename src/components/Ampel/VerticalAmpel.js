import React, { useContext, useState, useEffect } from "react";
import "./VerticalAmpel.css";
import ContextLight from "../../store/context-light";

const VerticalAmpel = () => {
  const ctx = useContext(ContextLight);

  const [isRed, setIsRed] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  const [isGreen, setIsGreen] = useState(false);

  const changeAmpelColor = (pushedLight) => {
    if (pushedLight === "Rot") {
      if (isYellow) {
        setIsRed(false);
        setIsGreen(false);
        setIsYellow(false);
      } else {
        setIsRed(true);
        setIsGreen(false);
        setIsYellow(false);
      }
    } else if (pushedLight === "Gelb") {
      if (isRed) {
        setIsYellow(true);
        setIsRed(true);
      } else if (isGreen) {
        setIsYellow(false);
        setIsRed(false);
        setIsGreen(false);
      }
    } else if (pushedLight === "Gruen") {
      if (isYellow) {
        setIsGreen(true);
        setIsRed(false);
        setIsYellow(false);
      } else if (isRed) {
        setIsRed(false);
        setIsYellow(false);
        setIsGreen(false);
      }
    }
  };

  useEffect(() => {
    changeAmpelColor(ctx.light);
    // console.log(ctx.light);
  }, [ctx.light]);

  const redClass = isRed ? "ampel-button red" : "ampel-button";
  const yellowClass = isYellow ? "ampel-button yellow" : "ampel-button";
  const greenClass = isGreen ? "ampel-button green" : "ampel-button";

  return (
    <div className="ampel-body">
      {/* <div className="update-light">{ctx.light}</div> */}
      {/* <button onClick={() => doFunc("val")}>test</button> */}
      <div className={redClass}></div>
      <div className={yellowClass}></div>
      <div className={greenClass}></div>
    </div>
  );
};

export default VerticalAmpel;

import React, { useContext, useState, useEffect } from "react";

import ContextLight from "../store/context-light";
import HorizontalAmpel from "./Ampel/HorizontalAmpel";
import VerticalAmpel from "./Ampel/VerticalAmpel";
import AmpelPanel from "./AmpelPanel";

import "./Ampel/VerticalAmpel.css";


const Condition = (props) => {

const ctx = useContext(ContextLight);
// console.log(ctx)

  const [isRed, setIsRed] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  const [isGreen, setIsGreen] = useState(false);

  const changeAmpelColor = (pushedLight) => {
    if (pushedLight === "Rot") {
      if (isYellow) {
        setIsRed(true);
        setIsGreen(false);
        setIsYellow(false);
      } else if (isGreen) {
        setIsRed(false);
        setIsGreen(true);
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
        setIsYellow(true);
        setIsRed(false);
        setIsGreen(false);
      }
    } else if (pushedLight === "Gruen") {
      if (isYellow) {
        setIsGreen(true);
        setIsRed(false);
        setIsYellow(false);
      } else if (isRed) {
        setIsRed(true);
        setIsYellow(false);
        setIsGreen(false);
      }
    }
  };

  useEffect(() => {
    changeAmpelColor(ctx.light);
  }, [ctx.light]);

  const redClass = isRed ? "red" : " ";
  const yellowClass = isYellow ? "yellow" : " ";
  const greenClass = isGreen ? "green" : " ";

  console.log(redClass);
  return props.type === "Horizontal" ? (
    <HorizontalAmpel
      redClass={redClass}
      yellowClass={yellowClass}
      greenClass={greenClass}
    />
  ) : (
    <VerticalAmpel
      redClass={redClass}
      yellowClass={yellowClass}
      greenClass={greenClass}
    />
  );
};

export default Condition;

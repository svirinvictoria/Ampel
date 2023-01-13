import React, {useState, useContext, useEffect} from "react";
import './HorizontalAmpel.css';
import ContextLight from "../../store/context-light";

const HorizontalAmpel = () => {

  const type = "Horizontal";

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
  }, [ctx.light]);

  const redClass = isRed ? "light red" : "light";
  const yellowClass = isYellow ? "light yellow" : "light";
  const greenClass = isGreen ? "light green" : "light";


  ///////////////////////////////////////
    return (
      <div className="ample-body">
        {/* <p>A horizontal traffic light</p> */}
        <div className={redClass}>  </div>
        <div className={yellowClass}>  </div>
        <div className={greenClass}>  </div>
      </div>
    );
};

export default HorizontalAmpel;
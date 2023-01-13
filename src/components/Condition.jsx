import HorizontalAmpel from "./Ampel/HorizontalAmpel";
import VerticalAmpel from "./Ampel/VerticalAmpel";

const Condition = (props) => {
  return props.type === "Horizontal" ? <HorizontalAmpel /> : <VerticalAmpel />;
};

export default Condition;

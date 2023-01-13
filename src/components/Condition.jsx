const condition = (props) => {
  return props.type === "A" ? <button>But</button> : <input type="checkbox" />;
};

export default condition;

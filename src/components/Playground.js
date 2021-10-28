import React from "react";
import { connect } from "react-redux";

function Playground(props) {
  const { age, onAgeUp, onAgeDown, history, onDeleteItem } = props;
  return (
    <div>
      <div>
        Age: <span>{age}</span>
      </div>
      <button onClick={onAgeUp}>Age Up</button>
      <button onClick={onAgeDown}>Age Down</button>
      <hr />
      <div>History</div>
      <div>
        <ul>
          {history.map((data) => (
            <li key={data.id} onClick={() => onDeleteItem(data.id)}>
              {data.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
  };
};
const mapDispachToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }), //value = payload
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onDeleteItem: (id) => dispatch({ type: "DEL_ITEM", key: id }),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(Playground);

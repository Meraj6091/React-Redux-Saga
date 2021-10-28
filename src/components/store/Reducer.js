import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  age: 21,
  history: [],
};
function Reducer(state = initialState, action) {
  switch (action.type) {
    case "AGE_UP":
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: uuidv4(),
          age: state.age + action.value,
        }),
      };
    case "AGE_DOWN":
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({ age: state.age - action.value }),
      };
    case "DEL_ITEM":
      return {
        ...state,
        history: state.history.filter((data) => data.id !== action.key),
      };
  }

  return state;
}

export default Reducer;

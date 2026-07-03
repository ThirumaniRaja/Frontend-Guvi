import React, { useReducer } from "react";

export const initialState = { count: 0 };

function counterReducer(state: { count: number }, action: { type: string }) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
}

function UseReduceDemo() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Current Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })} style={{ marginLeft: 8 }}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })} style={{ marginLeft: 8 }}>
        Reset
      </button>
    </div>
  );
}

export default UseReduceDemo;
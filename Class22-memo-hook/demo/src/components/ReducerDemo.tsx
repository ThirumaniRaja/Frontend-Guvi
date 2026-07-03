import  { useReducer } from "react";
import { initialState, counterReducer } from "../reducer/counterReducer";
import { INCREMENT, DECREMENT, RESET } from "../actions/counterActions";

function ReducerDemo() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: INCREMENT })}>INCREMENT</button>
      <button
        onClick={() => dispatch({ type: DECREMENT })}
        style={{ marginLeft: 8 }}
      >
        DECREMENT
      </button>
      <button
        onClick={() => dispatch({ type: RESET })}
        style={{ marginLeft: 8 }}
      >
        RESET
      </button>
      
    </div>
  );
}

export default ReducerDemo;
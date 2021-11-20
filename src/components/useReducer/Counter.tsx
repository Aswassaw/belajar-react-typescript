import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload?: number;
};

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  const { type, payload = 1 } = action;

  switch (type) {
    case "increment":
      return { count: state.count + payload };
    case "decrement":
      return { count: state.count - payload };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='border'>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Tambah
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Kurang</button>
    </div>
  );
};

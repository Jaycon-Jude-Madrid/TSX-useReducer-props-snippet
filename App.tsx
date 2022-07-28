import React, { Dispatch, useReducer } from 'react';

import './style.css';

type stateProps = {
  count: number;
};
type actionProps = {
  type: string;
  payload?: any;
};
const initialState = {
  count: 0,
};
const reducer = (state: stateProps, action: actionProps) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Component count={state.count} dispatch={dispatch} />;
}

interface Props {
  count: number;
  dispatch: React.Dispatch;
}
const Component = ({ count, dispatch }: Props) => {
  return (
    <div>
      <div>
        <h3>{count}</h3>
        <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
          {' '}
          +{' '}
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}> - </button>
        <button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
      </div>
    </div>
  );
};

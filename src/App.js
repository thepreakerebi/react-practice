import React, { useReducer } from "react";
import ContextComponentA from "./components/ContextComponentA";
import ContextComponentB from "./components/ContextComponentB";
import ContextComponentG from "./components/ContextComponentG";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}




function App() {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        Count - {count}
        <ContextComponentA />
        <ContextComponentB />
        <ContextComponentG />
      </div>
    </CountContext.Provider>
    
  );
}

export default App;

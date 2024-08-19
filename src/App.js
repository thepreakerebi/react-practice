import React from 'react';
import ContextComponentC from "./components/ContextComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();


function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'John'}>
        <ChannelContext.Provider value={'Doe'}>
          <ContextComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

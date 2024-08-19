import ContextComponentC from "./components/ContextComponentC";
import { UserProvider } from "./components/ContextHook";




function App() {
  return (
    <div className="App">
      <UserProvider value={'John'}>
        <ContextComponentC />
      </UserProvider>
    </div>
  );
}

export default App;

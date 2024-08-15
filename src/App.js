//import {Greet} from './components/Greet'

import ClickCounter2 from "./components/ClickCounter2";
import Counter2 from "./components/Counter2";
import HoverCounter2 from "./components/HoverCounter2";

// import FragmentDemo from "./components/FragmentDemo";
// import ParentComp from "./components/ParentComp";
// import FocusInput from "./components/FocusInput";
// import FRParentInput from "./components/FRParentInput";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// import PortalDemo from "./components/PortalDemo";
// import RefDemo from "./components/RefDemo";
// import PureComp from "./components/PureComp";

// import Form from "./components/Form";

//import { NameList } from "./components/NameList";
//import StyleSheet from "./components/StyleSheet";
// import { UserGreeting } from "./components/UserGreeting";

// import { ParentComponent } from "./components/ParentComponent";

// import { EventBind } from "./components/EventBind";

//import { Counter } from "./components/Counter";
// import { ClassClick } from "./components/ClassClick";
// import { FunctionClick } from "./components/FunctionClick";

// import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Wisdom" /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet /> */}
      {/* <Form /> */}
      {/* <FragmentDemo /> */}
      {/* <ParentComp /> */}
      {/* <RefDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      <Counter2 render={(count, incrementCount) => <ClickCounter2 count={count} incrementCount={incrementCount} />} />
      <Counter2 render={(count, incrementCount) => <HoverCounter2 count={count} incrementCount={incrementCount} />} />
    </div>
  );
}

export default App;

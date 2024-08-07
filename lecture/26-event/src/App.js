import "./App.css";
import ClassBind from "./ClassBind";
import HandlerEx from "./conponents/ex/HandlerEx";
import Counter from "./Counter";
import SyntheticEvent from "./SyntheticEvent";
import EventStudy from "./EventStudy";
import Prac from "./Prac";
import Prac2 from "./Prac2";

function App() {
  return (
    <div className="App">
      <EventStudy />

      <SyntheticEvent />
      <hr />

      <ClassBind />
      <hr />

      <Counter />
      <hr />

      <HandlerEx />
      <hr />

      <Prac />
      <hr />

      <Prac2 />
      <hr />
    </div>
  );
}

export default App;

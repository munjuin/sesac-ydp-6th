import "./App.css";
import ClassBind from "./ClassBind";
import HandlerEx from "./conponents/ex/HandlerEx";
import Counter from "./Counter";
import SyntheticEvent from "./SyntheticEvent";

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />

      <ClassBind />
      <hr />

      <Counter />
      <hr />

      <HandlerEx />
      <hr />
    </div>
  );
}

export default App;

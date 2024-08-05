import "./App.css";
import Counter from "./Counter";
import CounterFunction from "./CounterFunction";
import SayFunction from "./SayFunction";
import PracticeClass from "./PracticeClass";
import PracticeFunction from "./PracticeFunction";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />

      <SayFunction />
      <hr />

      <CounterFunction value={"Plus 1"} />
      <hr />

      <PracticeClass />
      <hr />

      <PracticeFunction />
    </div>
  );
}

export default App;

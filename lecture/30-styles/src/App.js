import CssModuleComponents from "./CssModuleComponents";
import SassComponents from "./SassComponents";
import StyledComponent from "./StyledComponent";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>React Styleing</h1>
      <hr />

      <CssModuleComponents></CssModuleComponents>
      <hr />

      <SassComponents></SassComponents>
      <hr />

      <StyledComponent></StyledComponent>
    </div>
  );
}

export default App;

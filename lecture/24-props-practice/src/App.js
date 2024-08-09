import "./App.css";
import Book from "./Book";
import Food from "./Food";
import Practice3 from "./Practice3";

function App() {
  return (
    <div className="App">
      <Food food={"햄버거"}></Food>
      <hr />

      <Book
        title={"어떻게 극단적 소수가 다수를 지배하는가"}
        author={"스티븐 레비츠키, 대니얼 지블랫"}
        price={"17000원"}
        type={"자기개발서"}
      ></Book>
      <hr />

      <Practice3 text={"텍스트"} valid={"콘솔띄우기 성공"}></Practice3>
    </div>
  );
}

export default App;

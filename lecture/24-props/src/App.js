import "./App.css";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import Button from "./Button";
import Food from "./Food";
import Book from "./Book";

function App() {
  let name = "로이";
  let animal = "강아지";

  let a = 2;
  let b = 1;

  let title = "책이름";
  let author = "저자이름";
  let price = "책가격";
  let type = "책분류";

  function ab() {
    if (a > b) {
      return "a가 b보다 큼";
    }
  }
  return (
    <div className="App">
      <Food name="햄버거"></Food>
      <Book></Book>
      {/* <h2>제 반려 동물의 이름은 {name} 입니다</h2>
      <h2>
        {name}는 {animal}입니다
      </h2>
      {3 + 5 == 8 ? "정답입니다" : "오답입니다"}
      <br />
      {ab()}

      <h1>{title}</h1>
      <label htmlFor="id">아이디: </label>
      <input type="text" id="id" />
      <br />
      <label htmlFor="pw">비밀번호: </label>
      <input type="text" id="pw" /> */}

      {/* 
      <ClassComponent />
      <ClassComponent name="SeSAC 6기" />
      <hr />

      <FunctionComponent />
      <FunctionComponent name="SeSAC 6기" />

      <Button link="https://google.com">구글</Button> */}
    </div>
  );
}

export default App;

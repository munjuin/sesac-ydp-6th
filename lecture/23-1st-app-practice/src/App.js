import "./App.css";

function App() {
  const name = "로이";
  const animal = "강아지";

  const a = 3;
  const b = 2;

  const title = "Hello World";
  return (
    <div className="App">
      {/* 실습 1. */}
      <h2>
        제 반려 동물의 이름은 {name}입니다. <br />
        {name}는 {animal}입니다
      </h2>

      {/* 실습 2. */}
      {3 + 5 === 8 ? "정답입니다" : "오답입니다"}

      {/* 실습 3. */}
      {a > b && <p>a가 b 보다 큽니다</p>}

      {/* 실습 4. */}
      <h1 className="title">{title}</h1>
      <label htmlFor="">
        아이디 :
        <input type="text" name="" id="" />
      </label>
      <br />
      <label htmlFor="">
        비밀번호 :
        <input type="password" name="" id="" />
      </label>
    </div>
  );
}

export default App;

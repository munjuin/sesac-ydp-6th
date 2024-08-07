import React, { useState } from "react";

export default function Map2() {
  const [info, setInfo] = useState([{}]);
  return (
    <>
      <fieldset>
        <label htmlFor="">
          <span>작성자 : </span>
          <input type="text" />
          <span>제목 : </span>
          <input type="text" />
          <button>작성</button>
        </label>
      </fieldset>

      <select>
        <option value="">작성자</option>
        <option value="">제목</option>
      </select>
      <input type="text" name="" id="" />
      <button>검색</button>
      <button>전체</button>

      <table style={{}}>
        <thead>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </thead>
      </table>
    </>
  );
}

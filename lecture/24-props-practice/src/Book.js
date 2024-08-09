import React from "react";
import img from "./img.jpg";

export default function Book(props) {
  const { title, author, price, type } = props;
  return (
    <div>
      <img src={img} alt="" width={"100px"} height={"100px"} />
      <h1>{title}</h1>
      <p>저자: {author}</p>
      <p>가격: {price}</p>
      <p>구분: {type}</p>
    </div>
  );
}

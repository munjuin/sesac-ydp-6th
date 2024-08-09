import React from "react";

export default function Food(props) {
  const { food } = props;
  return (
    <div>
      {/* 실습 1. */}
      <h1>
        <span style={{ color: "red" }}>{food}</span> 좋아요
      </h1>
    </div>
  );
}

Food.defaultProps = {
  food: "피자",
};

import React from "react";
import { useForm } from "react-hook-form";

export default function Practice1() {
  const {
    register, // input 할당, value 변경 감지.
    handleSubmit, // form submit 시 호출.
    formState: { errors }, // 폼 상태 객체
    watch, // 특정 폼 필드의 값을 실시간으로 사용
  } = useForm();

  // func A 용
  const onValid = (data) => {
    console.log(data);
  };

  // func B 용
  const onInValid = (err) => {
    console.log(err);
  };

  // console.log("errors >>>>> ", errors);
  // console.log("watch >>>>> ", watch("username"));

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="name"
          {...register("name", {
            required: "이름은 필수 항목입니다",
          })}
        />
        {errors.name?.message}

        <br />

        <input
          type="age"
          placeholder="age"
          {...register("age", {
            // required: "0 이상의 숫자만 입력해주세요",
            validate: {
              useAge: (v) => v >= 0 || "0 이상의 숫자만 입력해주세요",
            },
          })}
        />

        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}

import React from 'react'

export default function Select(props) {
    const setData = props.setData;
  return (
    <>
        과일:
        <select onChange={(e) => {
            // data state 값의 fruit 값을 변경해주기.
            console.log(e.target.value);

            setData((data) => {
                return {...data, fruit: e.target.value}
            })
        }}>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="peach">복숭아</option>
        </select>
        배경색:
        <select onChange={(e) => {
            setData((data) => {
                return {...data, background: e.target.value}
            })
        }}>
            <option value="red">빨강</option>
            <option value="yellow">노랑</option>
            <option value="blue">파랑</option>
        </select>
        글자색:
        <select onChange={(e) => {
            setData((data) => {
                return {...data, color: e.target.value}
            })
        }}>
            <option value="red">빨강</option>
            <option value="yellow">노랑</option>
            <option value="blue">파랑</option>
        </select>
    </>
  )
}
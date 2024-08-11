import React, { useState } from 'react'

export default function Practice2() {
  const [info, setInfo] = useState(
    {
      title: '검정색 글씨',
      color: 'black'
    }
  );
  return (
    <>
      <h1 style={{color: info.color}}>{info.title}</h1>
      <button onClick={()=>{
        setInfo(
          {
            title: '빨간색 글씨',
            color: 'red'
          }
        )
      }}>빨간색</button>
      <button onClick={()=>{
        setInfo(
          {
            title: '파란색 글씨',
            color: 'blue'
          }
        )
      }}>파란색</button>
    </>
  )
}

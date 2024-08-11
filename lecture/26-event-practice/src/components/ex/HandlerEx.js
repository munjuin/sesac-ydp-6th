import React, { useState } from 'react'

export default function HandlerEx() {
  const [title, setTitle] = useState('Hello World!');
  return (
    <>
      <h1>{title}</h1>
      <button onClick={()=>{
        setTitle('Goodbye World!');
      }}>버튼</button>
    </>
  )
}

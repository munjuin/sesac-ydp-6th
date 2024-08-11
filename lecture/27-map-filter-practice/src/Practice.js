import React, { useState } from 'react'

export default function Practice() {
  const [info, setInfo] = useState(
    {
      name: '코디',
      email: 'codi@gmail.com'
    }
  )
  return (
    <>
      <form action="">
        <input type="text" placeholder='이름'/>
        <input type="text" placeholder='이메일'/>
        <button onClick={(e)=>{
          console.log(e.target.value);
        }}>등록</button>
      </form>
        <h1>{info.name} : {info.email}</h1>
    </>
  )
}

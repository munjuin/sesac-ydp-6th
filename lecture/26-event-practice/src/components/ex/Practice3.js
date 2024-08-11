import React, { useState } from 'react'

export default function Practice3() {
  const [display, setDisplay] = useState(true)

  
  return (
    <>
      <button onClick={()=>{
        setDisplay(!display)
      }}>
        {
          display ? '사라져라' : '보여라'
        }
      </button>
      {display && <h1>안녕하세요</h1>}
    </>
  )
}

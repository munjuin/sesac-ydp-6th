import React from 'react'

export default function Input(props) {
    const { setData } = props;

    const handleInput = (e) => {
        const content = e.target.value;
s
        setData((data) => {
            return {...data, content}
        });
    }
  return (
    <>
        내용: <input type="text" onChange={handleInput} />
    </>
  )
}
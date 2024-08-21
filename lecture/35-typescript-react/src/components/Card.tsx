import React from 'react'
// interface설정
interface CardProps{
  title: string;
  // children: React.ReactNode;//강제로 React.FC<React.PropsWithChildren<CardProps>> 시킬 때
}
// React.ReactNode란
// 리액트에서 가장 유연하고 광범위한 타입
// : 컴포넌트가 자식으로 받을수 있는 모든 형태의 값을 정의

// #1. children 직접 전달
// export default function Card({title, children}: CardProps) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <div>{children}</div>
//     </div>
//   )
// }

// #2. React.FC(children 자동 전달)
// react.18 이후로 변경됨 -> 자동전달 X / 명시적으로 적어줄 것
// const Card: React.FC<CardProps> = ({title, children }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <div>{children}</div>
//     </div>
//   )
// }

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  )
}

export default Card

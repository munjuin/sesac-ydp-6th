import React, { useState } from "react";

export default function Map() {
  const [info, setInfo] = useState([
    {
      name: "코디",
      email: "codi@gmail.com",
    },
  ]);

  return (
    <>
      <input type="text" placeholder="이름" />
      <input type="email" placeholder="이메일" />
      <button onClick={() => {}}>등록</button>
      <div>
        {info.map((a) => {
          return (
            <div>
              {a.name} : {a.email}
            </div>
          );
        })}
      </div>
    </>
  );
}

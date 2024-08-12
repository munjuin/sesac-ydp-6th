import React from "react";
import styles from "./styles/cssModule.module.css";

//CSS module
//클래스명 중복 방지
export default function CssModuleComponents() {
  console.log(styles);
  // 새로운 고유 번호를 부여

  return (
    <div className={styles.container}>
      <div className={[styles.box, styles.red].join(" ")}>1</div>
      {/* 두 클래스를 동시에 적용
          배열의 요소들을 문자열로 합쳐서 클래스명을 한 줄로 만들어아
           */}
      <div className={[styles.box, styles.orange].join(" ")}>2</div>
      <div className={`${styles.box} ${styles.yellow}`}>3</div>
    </div>
  );
}

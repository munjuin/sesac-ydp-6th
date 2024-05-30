let age = prompt();
function 연령대확인 (){
  if (age >= 20){
    return '성인';
  }else if (age >= 17){
    return "고등학생";
  }else if (age >= 14){
    return "중학생";
  }else if (age >= 8){
    return "초등학생";
  }else if (age >= 0){
    return "유아";
  }

}
console.log(연령대확인());
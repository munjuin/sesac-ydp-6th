const fs = require('fs');//file system 모듈 호출
const inputData = fs.readFileSync(0, 'utf8', (err, data)=>{
  console.log(`${data} 입니다`);
}).toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);
///////////////////////////////////////////////////////////////////////////////////////
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

/* 
* options로 utf8(인코딩)을 string으로 넘길 경우, toString을 할 필요없이 문자열 반환
const input = require('fs').readFileSync(0, 'utf8').split(' ');
*/

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a+b);

/*
안녕하세요!

평소에는 테스트 케이스 파일이 존재하는 '/dev/stdin' 경로로 readFileSync Path 값을 넘겨주었지만, 14681번 문제에서는 fs모듈 런타임 에러가 발생합니다.

해결하는 방법으로는 본 포스트에서 사용한 방법인,
0을 넣는 방법과 fs 모듈 대신에 readline 모듈을 사용하는 방법이 있겠습니다.

여기서 0을 넣는 이유는 표준 파일 설명자 값이(standard input) 0이기 때문입니다! 별도의 파일('/dev/stdin')이 아닌 표준 입력을 받는 경우에는 0이라는 인자값을 넘겨줍니다!

아마 해당 문제에서는 '/dev/stdin' 경로에 파일이 없던가, 권한이 설정 안 된 문제가 있는 거 같습니다.

백준에도 동일한 질문이 올라와 있는 것 같습니다. 참고하시면 좋을 것 같습니다.감사합니다!
URL: https://www.acmicpc.net/board/view/51283

정말 감사한 출처 : https://gurtn.tistory.com/17
*/
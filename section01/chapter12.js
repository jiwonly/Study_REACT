// 1. 함수 표현식 (호이스팅 X)
// 함수를 변수의 값으로 저장해 생성하는 방법

function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
varA(); // funcA가 그대로 출력

let varB = function () {
  // 익명함수 (이름이 없다)
  //   console.log("funcB");
};

varB(); // funcB 출력

// 2. 화살표 함수
// 익명 함수를 매우 간결하게 작성할 때 사용하는
// 함수 표현식의 단축 문법
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(3));

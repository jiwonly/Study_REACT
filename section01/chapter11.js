// 함수 선언

function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeting(); // 반드시 소괄호 같이 호출
console.log("호출 후");

//

function getArea(width, height) {
  // 매개변수 type 안 써도 ok

  function another() {
    //중첩함수
    console.log("another ft");
  }

  another();

  let area = width * height;
  return area; // 반환값
}

let area1 = getArea(10, 20); // 인수
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 20);

// 함수 선언문이 어디에 있던 바로 호출 가능!
// 함수가 위에 없어도 ok
// 호이스팅
// -> 끌어올리다 라는 뜻

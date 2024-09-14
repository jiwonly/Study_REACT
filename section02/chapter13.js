// promise : 비동기 작업을 효율적으로 처리할 수 있도록
// 도와주는 자바스크립트의 내장 객체

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num은 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result); // 10

    return add10(result); // promise 지옥 방지
  })
  .then((result) => {
    console.log(result); // 20
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 30
    return add10(result);
  })
  .catch((error) => {
    console.log(error);
  });

// then 메서드 : promise가 성공했을 때만 실행된다.
// catch 메서드 : promise가 실패했을 때만 실행된다.
// 연결 가능!

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// promise chaining

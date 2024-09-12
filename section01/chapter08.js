// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20
let var6 = var2 ?? var3; // 이런 경우 앞에 있는 var2로 출력

let userName = "전지원";
let userNickName = "ysjjw";

let displayName = userName ?? userNickName; // 유저 네임이 있으면 유저 네임으로, 없으면 닉네임으로

// 2. typeof 연산자
// -> 변수의 자료형을 확인할 수 O

let var7 = 1; // number
var7 = true; // boolean
var7 = "hello"; // string

let t1 = typeof var7; // string

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";

console.log(res);

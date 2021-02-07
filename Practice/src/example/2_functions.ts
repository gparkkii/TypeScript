// 함수 파라미터에 타입을 지정하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }
// sum(1, 2);

// 함수의 반환 값에 타입을 지정하는 방식
// function add(): number {
//   return 10;
// }
// add();

// 함수의 파라미터, 반환값에 타입을 지정하여 사용하는 최종적인 방식
function sumAndAdd(a: number, b: number): number {
  return a + b;
}
sumAndAdd(1, 2);

// 함수의 파라미터를 제한하는 특성
function ifaddmore(a: number, b: number): number {
  return a + b;
}
ifaddmore(1, 2);
// console.log(ifaddmore(1, 2));

// 함수의 옵셔널 파라미터
function optionTest(a?: string) {
  // ...
}
optionTest('abomasum');

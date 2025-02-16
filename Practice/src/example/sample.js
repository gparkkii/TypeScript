// @ts-check

/**
 * App 클래스 입니다.
 * @class
 */

const Sums = function () {
  /**
   * 숫자 a와 b를 더해주는 함수입니다.
   * @param {Number} a 첫번째 숫자
   * @param {Number} b 두번째 숫자
   */
  const printSum = function sum(a, b) {
    return a + b;
  };
  printSum(10, 20);
};
new Sums();

// function PersonofClass(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log('생성되었습니다.');
// }
// const john = new PersonofClass('JohnPark', 100);
// console.log(john);

class PersonofClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const John = new PersonofClass("JohnPark", 100);
console.log(John);

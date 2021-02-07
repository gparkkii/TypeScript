const typename = `capt`;
type MyName = string;
const YourName: MyName = typename;
console.log(YourName); //capt

// ================================================================= //
// 좋은 소프트웨어는 언제나 확장이 용이해야 한다는 원칙에 따라 가급적 확장 가능한 인터페이스로 선언하면 좋습니다

interface Person {
  name: string;
  age: number;
}
const jaeho: Person = {
  name: '재호',
  age: 36,
};

type People = {
  name: string;
  age: number;
};
const sayho: People = {
  name: '세호',
  age: 36,
};

type MyString = string;
const mystring: MyString = 'Hello';

// ================================================================= //

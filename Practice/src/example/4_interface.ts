/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// 인터페이스란 상호간의 약속을 나타낸다
interface User {
  name: string;
  age: number;
}

// 변수에 활용한 인터페이스
const seho: User = {
  name: '세호',
  age: 36,
};

// 함수에 활용한 인터페이스
// 인터페이스는 api 호출 후, api의 데이터 모양을 정의하는데 가장 많이 활용된다.
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: '캡틴',
  age: 100,
};

getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인터페이스의 인덱싱
interface StringArray {
  [index: number]: string;
}
const stringarr: StringArray = ['a', 'b', 'c'];
stringarr[0] = '10';

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}
const obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
obj.cssFile;
obj['cssFile'] = /\.scss$/;

// 인터페이스의 확장
// 인터페이스를 상속받아 기존의 값보다 확장해서 사용해보자
interface Person {
  name: string;
  age: number;
}
// Person을 확장한 Developer Interface
interface Developer extends Person {
  language: string;
}

const captain: Developer = {
  name: 'captain America',
  age: 100,
  language: 'en',
};

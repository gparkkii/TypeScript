/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
// interface
interface ComDeveloper {
  name: string;
  skill: string;
}
interface ComPerson {
  name: string;
}
let comd: ComDeveloper = { name: '0', skill: '1' };
let comp: ComPerson = { name: '0' };
// 타입 호환은 오른쪽에 있는 타입이 더 많은 속성을 갖거나 구조적으로 더 커야한다.
comp = comd;

// 함수
let comAdd = function (a: number) {
  //...
};
let comSum = function (a: number, b: number) {
  //...
};
comSum = comAdd;

// 제네릭
interface Empty<T> {
  //...
}
let empty1: Empty<string> = '1';
let empty2: Empty<number> = 2;
empty1 = empty2;

interface NoEmpty<T> {
  data: T;
}
let notempty1: NoEmpty<string> = { data: '1' };
let notempty2: NoEmpty<number> = { data: 2 };
// notempty1 = notempty2; impossible

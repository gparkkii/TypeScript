/* eslint-disable @typescript-eslint/no-unused-vars */

// JS 문자형
// const str = 'hello';

// TS 문자형
const str = 'hello';

// TS 숫자형
const num = 10;

// TS 배열
const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const heroes: Array<string> = [
  'Ironman',
  'CaptainAmerica',
  'Thor',
  'Hulk',
  'DoctorStrange',
];

// TS 리터럴
const items: number[] = [1, 2, 3, 4, 5];

// TS 튜플
const address: [string, number] = ['판교', 2];

// TS 객체
//const obj: object = {}; // need to add specific types of object properties
const person: { name: string; age: number } = {
  name: 'John',
  age: 36,
};

// TS 진위값
let show: true;

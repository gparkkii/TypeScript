// 1. basic type inference
const a: any = 'abc';
function getB(b = 10) {
  const c = 'hi';
  return b + c;
}
console.log(a); //abc
console.log(getB()); //10hi

// 2. interface type inference
interface Dropdown<T> {
  value: T;
  title: string;
}
const shoppingItems: Dropdown<boolean> = {
  value: true,
  title: '10',
};
console.log(shoppingItems); //{ value: true, title: '10' }

// 3. generic type inference
interface Dropdown2<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<T> extends Dropdown2<T> {
  tag: T;
  description: string;
}
const detailedItems: DetailedDropdown<number> = {
  value: 10,
  title: 'title',
  tag: 100,
  description: 'detail',
};
console.log(detailedItems); //{ value: 10, title: 'title', tag: 100, description: 'detail' }

//4. Best Common Type Inference (is kinda intellisense algorithm)
const bctypeArray = [1, 2, '3', 4, true];

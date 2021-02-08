// Basic Interface Typescript
// interface Email {
//   value: string;
//   selected: boolean;
// }

// const emails: Email[] = [
//   { value: 'naver.com', selected: true },
//   { value: 'gmail.com', selected: false },
//   { value: 'hanmail.net', selected: false },
// ];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// const numberOfProducts: ProductNumber[] = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

// function createDropdownItem(
//   item:
//   | Email
//   | ProductNumber
//   ) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// // NOTE: 이메일 드롭 다운 아이템 추가
// emails.forEach(function (email) {
//   const item = createDropdownItem(email);
//   const selectTag = document.querySelector('#email-dropdown');
//   selectTag.appendChild(item);
// });

// With Gerneric in Interface
interface generics<T> {
  value: T;
  selected: boolean;
}

const emails: generics<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

interface ProductNumber {
  value: number;
  selected: boolean;
}

const numberOfProducts: generics<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: generics<string> | generics<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  // const selectTag = document.querySelector('#email-dropdown');
  // selectTag.appendChild(item);
});

// 타입 제한하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength<string>('amb');

// 제너릭 타입제한 by keyof
interface ShoppingItems {
  name: string;
  price: number;
  stock: number;
}
// 쇼핑 아이템 중 한가지의 타입만 가질 수 있다.
function getShoppingItemOption<T extends keyof ShoppingItems>(
  itemOption: T,
): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
getShoppingItemOption('price');

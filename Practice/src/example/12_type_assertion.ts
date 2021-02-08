// 타입 단언이란??
let assert;
assert = 29;
assert = 'a';
const b = assert as string;

// DOM API 조작
// DOM API 예시 : document.querySelector();
const div = document.querySelector('#app') as HTMLDivElement;
if (div) {
  div.innerText = 'a';
}

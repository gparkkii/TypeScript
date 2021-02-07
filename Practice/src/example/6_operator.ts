// Union Type : | or 연산자로 여러개의 타입이 사용 가능해진다.
function logMessage(value: string | number) {
  console.log(value);
}
logMessage('hello world');
logMessage(100);

// Union Type을 통해 Type 점검하기

let checktype: string | number | boolean;
function checktypeMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLowerCase;
  } else if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('Invalid type');
}

// Union Type의 특징
interface first_developer {
  name: string;
  skill: string;
}

interface second_developer {
  name: string;
  age: number;
}

function askSomeone(someone: first_developer | second_developer) {
  // 여러개의 유니온 타입을 쓰게 될 때는 보장된(두개의 유니온 타입이 모두 다 가지고 있는) 속성만 사용하게 된다.
  someone.name; // (o)
  // someone.skill; (x)
}

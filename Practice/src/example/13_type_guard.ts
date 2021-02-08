interface guardDeveloper {
  name: string;
  skill: string;
}

interface guardPerson {
  name: string;
  age: number;
}

function introduce(): guardDeveloper | guardPerson {
  return { name: 'John', age: 100, skill: 'Ironman' };
}

const tony = introduce();
console.log(tony.name);

if ((tony as guardDeveloper).skill) {
  const skill = (tony as guardDeveloper).skill;
  console.log(skill);
} else if ((tony as guardPerson).age) {
  const age = (tony as guardPerson).age;
  console.log(age);
}

// 위의 type assertion은 계속된 단언으로 가독성이 안좋다.
// 이럴 때 쓸 수 있는 것이 type guard 이다.

// type guard
// type guard 속성은 is .. 을 많이 사용한다.
function isGuardDeveloper(
  target: guardDeveloper | guardPerson,
): target is guardDeveloper {
  return (target as guardDeveloper).skill !== undefined;
}

function returnAnswer() {
  if (isGuardDeveloper(tony)) {
    return tony.skill;
  } else {
    return tony.age;
  }
}
console.log(isGuardDeveloper(tony));
console.log(returnAnswer());

// 이넘은 특정 값들의 집합을 의미하는 자료형입니다. 예를 들면 아래와 같은 목록이 이넘이 될 수 있습니다.
enum Shoes {
  Nike,
  Adidas,
  NewBalance,
}
const myShoes = Shoes.Nike;
console.log(myShoes); //0
// 출력했을 때 0이 나오는 이유는 이넘의 값을 지정하지 않았을 때 기본값이 숫자형으로 되기 때문

enum TypedShoes {
  Nike = '나이키',
  Adidas = '아디다스',
  NewBalance = '뉴발란스',
}
const myTypedShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 예제
function askQuestion(answer: string): void {
  if (answer === 'yes') {
    console.log('정답입니다.');
  } else if (answer === 'no') {
    console.log('오답입니다.');
  }
}
askQuestion('yes'); // 정답입니다.

// Enum을 활용하기
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion2(answer: Answer): void {
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  } else if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}
askQuestion2(Answer.Yes);

// 제네릭은 C#, Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징입니다.
// 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됩니다.

function logText(text: any): void {
  console.log(text);
  return text;
}
logText('hello');
logText(10);
logText(true);

function logGenericText<T>(text: T): T {
  console.log(text);
  return text;
}
logGenericText<string>('hello');
logGenericText<number>(10);
logGenericText<boolean>(true);

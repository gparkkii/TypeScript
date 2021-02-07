class PersonofClass {
  //클래스 로직 : 인스턴스를 만들어주는 역할
  name: string;
  constructor(theName: string) {
    console.log('생성되었습니다.');
    this.name = theName;
  }
}
const john = new PersonofClass('JohnPark');
console.log(john);

// ==== 위 함수는 밑의 자바스크립트 함수와 같다 ==== //
// function PersonofClass(name) {
//   this.name = name;
//   console.log('생성되었습니다.');
// }
// const john = new PersonofClass('JohnPark');
// console.log(john);

// 타입스크립트의 클래스 함수
class TypeScriptClass {
  public name: string;
  private age: number;
  readonly read: boolean;
  constructor(name: string, age: number, read: boolean) {
    this.name = name;
    this.age = age;
    this.read = read;
  }
}
const classone = new TypeScriptClass('JohnPark', 100, true);
console.log(classone);

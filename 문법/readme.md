> 코딩앙마 JS 중급 1강

# 1. 변수
(1) 호이스팅
- 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동
- 하지만 할당을 안해주면 undefined
- 호이스팅은 스코프 단위로 일어남

(2) 변수의 생성과정
- 선언 단계
- 초기화 단계
- 할당 단계

(3) 함수 스코프
- 선언하기 전에 사용할 수 있음(호이스팅)
```js
//var name; 이런 식으로 선언은 호이스팅됨
console.log(name); // undefined
var name ='Mike'; // 할당은 호이스팅되지않아서 undefined나왔음
```

가. var
- 선언 + 초기화 > 할당
- 한번 선언된 변수를 다시 사용 할 수 있음
- if문 안에서 쓴 변수를 if문 밖에서도 쓸 수 있음
- 하지만 함수 안에서 쓴 변수는 var일지라도 함수 밖에서 사용 못함!!

(4) 블록 스코프
- let과 const는 Temporal Dead Zone 의 영향을 받음
```js
console.log(name); // ReferenceError
let name = 'Mike';
```
=> 할당을 하기 전에는 사용할 수 없음.
=> let과 const도 호이스팅 되지만, 

- 함수, if문, for문, while문, try/catch문
- ex. 함수 안에 선언된 변수는 함수 안에서만 사용 가능

가. let 
- 선언 > 초기화 > 할당

나. const
- 선언 + 초기화 + 할당

> 코딩앙마 JS 중급 2강
# 2. 생성자함수

(1) 객체 리터럴
let user = {
  name : 'Mike',
  age : 30,
}

(2) 생성자 함수
가. 형태 : 첫글자는 대문자로 시작함
function User(name, age){
//this = {}
  this.name=name;
  this.age=age;
//return this;  
}

나. 사용 : 객체 리터럴을 여러개 만들어야 할 때 쓴다.
let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);

=> 결과
user1 = User {name: 'Mike', age:30}
user2 = User {name: 'Jane', age:22}
user3 = User {name: 'Tom', age:17}

(3) method
function User(name, age){
  this.name=name;
  this.age=age;
  this.sayName = function(){
    console.log(this.name); 
    // this-> user5  
  }
}
let user5 = new User('Han', 40);
user5.sayName(); // 'Han'

> 코딩앙마 JS 중급 3강

# 3. 계산된 프로퍼티(computed property)와 객체 메소드(object methods)

(1) computed property
let a = 'age';
const user = {
  name : 'mike',
  [a] : 30 // 대괄호로 묶어주면 변수 a에 할당된 값 => age : 30 
}

[식을 입력해도 ok]
const user = {
  [1+4] : 5,
  ['안녕'+'하세요'] : 'Hello'
}

user => {5: 5, 안녕하세요: 'Hello'}

function makeObj(key, val) {
    return {
        [key] : val,
    }
}
const obj = makeObj('나이',33);
console.log(obj);
//{나이: 33}

const obj = makeObj('나이',33);
console.log(obj);
(2) 객체에서 사용할 수 있는 Methods
가. Object.assign(초기값, 추가할 내용) : 객체 복제
const user = {
  name : 'Mike',
  age : 30
} // user에는 객체가 저장되는 것이 아니고 객체의 참조값이 저장됨

const cloneUser = user; // (X) 객체가 복사 되는 것이 아니라 객체의 참조값이 저장됨
 
const newUser = Object.assign({}, user);
=> {} + {name : 'Mike', age:30}
=> 초기화 하는것이 아니라 더해주는 것

Object.assign({gender : 'male'},user);
gender : 'male',
name:'Mike',
age : 30,
key가 같으면 있으면 덮어씀
Object.assign({name : 'Tom'},user);
name : 'Mike',
age : 30,

여러개도 한번에 합치기 가능
const user = {
  name : 'Mike',
}
const info1 = {
  age : 30,
}
const info2 = {
  gender : 'male',
}
Object.assign(user, info1, info2);

나. Object.keys() : 키 배열 반환
const user = {
  name : 'Mike',
  age : 30,
  gender : 'male',
}

Object.keys(user); // ['name', 'age', 'gender']

다. Object.values() : 값 배열 반환

Object.values(user); // ['Mike', 30, 'male']

라. Object.entries() : 키와 배열을 모두 반환

Object.entries(user); // [['name', 'Mike'], ['age', 30], ['gender', 'male']]

마. Object.fromEntries() : 반대로 키와 배열을 입력하면 객체로 반환해줌

const arr = [
  ['name','Mike'],
  ['age',30],
  ['gender','male'],
];

Object.fromEntries(arr);
//{name: 'Mike', age: 30, gender: 'male'}

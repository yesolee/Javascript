# 1-2강
1. 폴더 생성
- 터미널에 npx create-react-app sblog //sblog는 폴더 이름 (대문자는 사용 못함)
2. 실행
- npm start
3. 폴더 설명
- node_modules : 라이브러리 코드 보관함
- public : static 파일 모아놓은 곳
- src : 코드 짜는 곳
4. 파일 설명
- js파일에 html 짜도 되는 이유 : index.js파일이 app.js을 index.html로 보내줌
- package.json : 프로젝트 정보(이름, 버전, 라이브러리 명 등등..) 

# 3강
1. JSX : .js파일에서 쓰는 html대용품 return안에 들어가는 거!
- 문법1) css를 위한 class선언시 className사용 (js문법 중 class있어서)
- 문법2) 변수 넣을 땐 {중괄호} : 데이터바인딩이라고 함
- 문법3) style넣을 땐 style={{스타일명 : '값'}
* 스타일명은 하이픈(-)사용 시 마이너스로 인식 할 수 있어서 카멜케이스로 작성

# 4강 블로그 만들어보기
1. css 중 box-sizing : border-box;
> 생활코딩 html : https://opentutorials.org/course/2418/13405
박스의 크기를 예측 가능 하도록 하기 위함.
원래 width는 content를 기준으로 정해짐. box-sizing : border-box;로 지정해두면 border를 기준으로 하고, content사이즈는 그에 따라 바뀜

2. return()안에는 병렬로 태그 2개이상 기입금지

3. state : 자료 잠깐 저장할 때 사용
- 사용법1) import {useState} 
- 사용법2) useState(보관할자료)
- 사용법3) let[작명, 함수작명] => Destructuring문법
* let num = [1,2]; //array
* let [a.c] = [1,2];
* let a = num[0];
* let c = num[1];
> 왜 변수 안쓰고 state를 쓸까?
****
- 일반 변수는 갑자기 변경되면 자동으로 html에 반영이 안됨
- state는 html이 자동으로 재렌더링됨
=> 자주 변경될거 같은 html 부분은 state로 만들어 놓기
****
- state를 array 형태로 만들어도 상관 없음
-   let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);
  
  # 5강.
  1. Error 말고 warning 메세지 안뜨게 하는 법
  : /* eslint-disable*/  //Lint끄는 기능임

2. 좋아요 버튼 & 걋수 UI만들기
* <span> 태그
  - <div>처럼 특별한 기능을 가지지 X
  - <div>와 달리 block이 아닌 inline 속성 => 줄바꿈X
  
3. 이벤트핸들러 onClick={함수이름}
  
4. state는 등호로 변경하면 html에 반영이 안됨
  => state변경용 함수를 써야 재렌더링이 잘 됨
  
5. 배열의 복사 => 배열과 oject는 독립적 카피본을 만들어서 수정해야 함.
  => shallow copy를 만들어줘야함!
  - 배열은 참조값을 저장하기 때문에 단순 복사하면 참조값만 복사되므로
  배열 안에 넣어줘야 함. => [...array] // ... : 괄호벗겨주세요 [] : 괄호 씌어주세요
  array는 ram에 저장되어있음
  => 참조값만 복사되면 state가 변경이 안됨
  왜냐하면..
  
 6. state 변경 함수의 특징!
  - 기존 state랑 신규 state가 같을 경우 변경 안해줌
  

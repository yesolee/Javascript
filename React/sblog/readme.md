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
  
  # 7강 Component
  1. 사용법
  - function 만들고 : 다른 함수 밖에, 함수명은 대문자로 시작
  * 함수 만들때 변수 안에 넣어 줄 수도 있음
  ex. const Modal = () => {
    return ( <p>안녕</p> 
    )
  }
  => const로 만들면 수정 안되서 실수 안하도록 도와줌
  - return()안에 html 담기
  - <함수명></함수명>쓰기 : <함수명 />도 가능
  
  2. return안에 html 병렬 기입하려면
  방법1) 의미없는 div는 <></>로 묶는다 
  
  3. 언제 쓰나?언제 컴포넌트 만들면 좋은가
  - 반복적임 html 축약할때
  - 큰 페이지들 
  - 자주 변경되는 것들
  
  4. 주의사항 !!
  - state 가져다 쓸 때 문제생김
  - 함수 안에 선언한 변수는 다른 함수에서 맘대로 가져다 쓸 수 없기 때문
  
  # 8강 동적 UI만드는 step
  1. html css로 미리 디자인 완성
  2. UI 현재 상태를 state로 저장
  3. state에 따라 UI가 어떻게 보일지 작성
  
  ** return( html ) ;
  html쓰는 자리에 if문 같은 문법이 필요할 경우 삼항연산자를 사용한다!
      return (
        {
          조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        } 
      )
      
  ** null은 비어있는 html용으로 자주 사용
  
  4. 기존 JS 버튼 누르면 모달창 html을 직접 건드림 => ex. display : none
  => react에선 버튼 누르면 모달창 스위치(state)만 건드림!!
  
  # 9강 map
  1. array 자료 갯수 만큼 함수안의 코드를 실행해줌
  2. 함수의 파라미터는 array 안에 있던 자료임
  3. return에 뭐 적으면 새로운 array로 담아줌
   [1,2,3].map(function(a){
    console.log('안녕')
    console.log(a)
    return '122321'
  });/ 
     // '안녕', 1
     '안녕',2
     '안녕',3
  (3) ['122321','122321', '122321']
  
  4. return (
    {
        for 사용 X => 대신 map()사용
    }
  ) 
  
  5.map의 파라미터 사용
글제목.map(function(글제목,i){ // i => 반복문 돌 때마다 0부터 1씩 증가하는 정수
    return (
        <div>
            <h4>{글제목[i}</h4>
        </div>
    )
})

6. 결론 : 비슷한 html 반복생성하려면 map()사용!

7. 정리 map()함수
- 왼쪽 array 자료만큼 내부 코드 실행해줌
- return오른쪽에 있는걸 array로 담아줌
- 유용한 파라미터 2개 사용가능

8. 참고!!
- 반복문으로 html 생성하면 key={html마다 다른 숫자}추가해야함!
- state가 array 자료일 경우 복사부터!!! 하고 수정하기 
  
# 10강 props
- App부모 > Modal자식 state전송 : 변수는 함수 밖을 못나가서 전송받아야함
1. 자식컴포넌트 작명 = {state이름}
2. props파라미터 등록 후 props.작명 사용
** 부모 => 자식만 가능, 자식->부모X 자식 간 X
** 컴포넌트 많아지면 props 쓰는게 귀찮아짐

- 파라미터 문법은 다양한 기능을 하는 함수를 만들때 사용함. 
ex. 다양한 색의 모달창이 필요하다

3. 주의사항
- state를 자식에 만들면 부모-> 자식 전송할 필요 없을 듯
- 근데 state가 Modal, App에서 필요하면 App에 만들어놔야함. (최상위 컴포넌트)
- 부모>자식은 전송 가능한데 반대는 안되기 때문!!

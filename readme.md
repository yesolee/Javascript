# React
> 코딩애플 유튜브 React 강좌
1. JSX 문법
(1) class 넣을 땐 className
(2) 변수 꽂을 땐 {변수명}
(3) style 넣을 땐 style = {{이름:'값'}}

2. return() 안에는 병렬로 태그 2개 이상 기입 금지
(1) 예시 : 가능 =>병렬X
- return (
-   <div>
      <div></div>
    <div/>
 - );
  
 (2) 예시 : 불가능 => 병렬
  return (
    <div>
    </div>
    <div>
    </div>
  );
  
  3. State : 자주 변경될거같은 html부분은 state로 만들어 놓기!!
  => 자료 잠깐 저장할때 사용
  => 변수 문법이 있는데 왜 써야함??
  차이점 1) 변수는 갑자기 변경되면 html에 자동으로 반영 안됨
  => state는 자동으로 html이 재 렌더링(변경) 됨
  (1) import {useState}
  (2) useState(보관할 자료)
  (3) let [작명1, 작명2]
  작명1 => 보관할 자료 
  작명2 => state 변경 도와주는 함수
  (4) 예시
  let [글제목,b] = useState('남자 코트 추천');
  글제목 = 남자 코트 추천
  b = 
  
  * Destructuring 문법
  let num = [1,2];
  
  let a = num[0]; //1
  let c = num[1]; //2
  
  let [a,c] = [1,2];
  
  4. 이벤트 핸들러 onClick={ 함수 }
  5. 스테이트 변경 : state변경함수(새로운state)
     => html도 자동으로 재렌더링 됨, 변수로 했다면 재렌더링 안됐음
  예시)
      let[따봉, 따봉변경] = useState(0);
      onClick={ ()=> { 따봉변경(따봉+1)} }
      
  (1)특징
      1) 기존state == 신규 state의 경우 변경 안해줌
      2) [array/object특징]
      let arr = [1,2,3] 
      [1,2,3]은 RAM에, arr는 [1,2,3]의 참조값을 담음.
  
      // 숙제
      => 버튼 누르면 글제목 가나다순 정렬 기능 만
